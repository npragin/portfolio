import { SpotlightCursor } from "@components"

const BaseLayout = ({ children, className = "" }) => {
	return (
		<>
			<SpotlightCursor />
			<div className={`min-h-screen font-inter ${className}`}>
				{children}
			</div>
		</>
	)
}

export default BaseLayout
