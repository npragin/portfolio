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
			className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute hidden lg:block"
			style={{
				background: `radial-gradient(var(--spotlight-radius) at ${position.x}px ${position.y}px, var(--spotlight-color) 0%, transparent var(--spotlight-stop))`,
			}}
		/>
	)
}

export default SpotlightCursor
