import ProfileSidebar from "./ProfileSidebar"
import Footer from "./Footer"
import { useState, useEffect } from "react"

const SpotlightCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const updatePosition = (e) => {
			setPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener("mousemove", updatePosition)

		return () => {
			window.removeEventListener("mousemove", updatePosition)
		}
	}, [])

	return (
		<div
			className="fixed pointer-events-none"
			style={{
				left: 0,
				top: 0,
				width: "100vw",
				height: "100vh",
				background: `radial-gradient(circle 800px at ${position.x}px ${position.y}px, 
                     rgba(63, 79, 162, .15) 0%, 
                     rgba(18,23,46,0) 70%)`,
			}}
		/>
	)
}

export default function Layout({ children }) {
	return (
		<>
			<SpotlightCursor />
			<div className="h-screen flex flex-col select-none font-circular overflow-hidden">
				<div className="flex relative h-full justify-center gap-x-4 overflow-y-auto no-scrollbar">
					<section id="about"></section>
					{/* left column */}
					<div className="w-full lg:w-1/3 sticky top-0 h-screen max-w-md flex flex-col">
						<div className="lg:rounded-xl flex lg:flex flex-col h-full py-8">
							<ProfileSidebar />
						</div>
					</div>

					{/* right column */}
					<div className="w-full lg:w-1/2 pb-8 pt-20 max-w-2xl">
						{children}
						<Footer/>
					</div>
				</div>
			</div>
		</>
	)
}
