import { SpotlightCursor } from "@components"

export default function ArchiveLayout({ children }) {
	return (
		<>
			<SpotlightCursor />
			<div className="min-h-screen font-circular">
				{children}
			</div>
		</>
	)
}
