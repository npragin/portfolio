import { useState, useEffect, useRef } from "react"

const SpotlightCursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const rafIdRef = useRef(null)

	useEffect(() => {
		const updatePosition = (e) => {
			if (rafIdRef.current) {
				return
			}

			rafIdRef.current = requestAnimationFrame(() => {
				setPosition({ x: e.clientX, y: e.clientY })
				rafIdRef.current = null
			})
		}

		window.addEventListener("mousemove", updatePosition)

		return () => {
			window.removeEventListener("mousemove", updatePosition)
			if (rafIdRef.current) {
				cancelAnimationFrame(rafIdRef.current)
			}
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
