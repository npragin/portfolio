import { SpotlightCursor } from "@components"
import { Analytics, SpeedInsights } from "@vercel/analytics/react"

const BaseLayout = ({ children, className = "" }) => {
	return (
		<>
			<Analytics />
			<SpeedInsights />
			<SpotlightCursor />
			<div className={`min-h-screen font-sans ${className}`}>
				{children}
			</div>
		</>
	)
}

export default BaseLayout
