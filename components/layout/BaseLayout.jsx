import { SpotlightCursor } from "@components"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const BaseLayout = ({ children, className = "" }) => {
	return (
		<>
			<Analytics />
			<SpeedInsights />
			<div className="relative">
				<SpotlightCursor />
				<div className={`min-h-screen font-sans ${className}`}>
					{children}
				</div>
			</div>
		</>
	)
}

export default BaseLayout
