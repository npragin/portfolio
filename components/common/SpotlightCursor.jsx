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
				background: `radial-gradient(circle var(--spotlight-radius) at ${position.x}px ${position.y}px, 
					var(--spotlight-color) 0%, 
					var(--spotlight-bg) 70%)`,
			}}
		/>
	)
}

export default SpotlightCursor
