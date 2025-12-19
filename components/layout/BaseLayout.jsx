import { SpotlightCursor } from "@components"

const BaseLayout = ({ children, className = "" }) => {
	return (
		<>
			<SpotlightCursor />
			<div className={`min-h-screen font-circular ${className}`}>
				{children}
			</div>
		</>
	)
}

export default BaseLayout
