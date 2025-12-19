import { useState, useEffect, useCallback } from "react"
import { SECTIONS } from "@constants"

const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState(SECTIONS[0])

	const handleScroll = useCallback(() => {
		const scrollY = window.scrollY

		const current = SECTIONS.find((section) => {
			const element = document.getElementById(section)
			if (!element) {
				return false
			}
			const { offsetTop, offsetHeight } = element
			return scrollY >= offsetTop && scrollY < offsetTop + offsetHeight
		})

		if (current) {
			setActiveSection(current)
		}
	}, [])

	useEffect(() => {
		handleScroll()
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [handleScroll])

	return activeSection
}

export default useActiveSection
