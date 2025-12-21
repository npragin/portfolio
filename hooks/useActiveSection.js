import { useState, useEffect, useCallback } from "react"
import { SECTIONS } from "@constants"

// Matches scroll-mt-24 (6rem = 96px) used on section elements
const SCROLL_OFFSET_PX = 96

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
			return scrollY + SCROLL_OFFSET_PX >= offsetTop && scrollY + SCROLL_OFFSET_PX < offsetTop + offsetHeight
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
