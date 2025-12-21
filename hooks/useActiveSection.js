import { useState, useEffect, useRef } from "react"
import { SECTIONS } from "@constants"

// Matches scroll-mt-24 (6rem = 96px) used on section elements
const SCROLL_OFFSET_PX = 96

const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState(SECTIONS[0])
	const visibleSectionsRef = useRef(new Set())

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const sectionId = entry.target.id
					if (entry.isIntersecting) {
						visibleSectionsRef.current.add(sectionId)
					} else {
						visibleSectionsRef.current.delete(sectionId)
					}
				})

				// Find the first visible section in document order
				const currentSection = SECTIONS.find((section) =>
					visibleSectionsRef.current.has(section),
				)

				if (currentSection) {
					setActiveSection(currentSection)
				}
			},
			{
				rootMargin: `-${SCROLL_OFFSET_PX}px 0px 0px 0px`,
				threshold: 0,
			},
		)

		SECTIONS.forEach((sectionId) => {
			const element = document.getElementById(sectionId)
			if (element) {
				observer.observe(element)
			}
		})

		return () => observer.disconnect()
	}, [])

	return activeSection
}

export default useActiveSection
