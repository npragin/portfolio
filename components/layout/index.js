import { useState, useEffect } from "react"
import { ProfileSidebar, SpotlightCursor } from "@components"

const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState("")

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "projects"]
			const scrollPosition = window.scrollY + 100 // TODO(npragin): Remove after fixing padding issues?

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const { offsetTop, offsetHeight } = element
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		handleScroll()

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return activeSection
}

export default function Layout({ children }) {
	const activeSection = useActiveSection()

	return (
		<>
			<SpotlightCursor />
			<div className="min-h-screen flex flex-col font-circular">
				<div className="flex relative justify-center gap-x-4">
					{/* left column */}
					<div className="w-full lg:w-1/3 sticky top-0 h-screen max-w-md flex flex-col">
						<div className="lg:rounded-xl flex lg:flex flex-col h-full">
							<ProfileSidebar activeSection={activeSection} />
						</div>
					</div>

					{/* right column */}
					<div className="w-full lg:w-1/2 max-w-2xl">
						{children}
					</div>
				</div>
			</div>
		</>
	)
}
