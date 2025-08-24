import React from "react"
import { CardLayout } from "@components"

const ParagraphSkeleton = ({ className }) => {
	return (

		<CardLayout>
			<div role="status" className={`${className} flex flex-col items-end max-w-full card_stylings animate-pulse bg-violet-500/5 self-center`}>
				<div className="skeleton-line"></div>
				<div className="skeleton-line"></div>
				<div className="skeleton-line"></div>
				<div className="skeleton-line"></div>
				<div className="skeleton-line"></div>
				<span className="sr-only">Loading...</span>
			</div>
		</CardLayout>

	)
}

export default ParagraphSkeleton
