import React from "react"
import CardLayout from "./CardLayout"

const ParagraphSkeleton = ({ className }) => {
	return (

		<CardLayout>
			<div role="status" className={`${className} max-w-full card_stylings animate-pulse bg-violet-500/5 self-center`}>
				<div className="h-2.5 rounded-full bg-slate-200 w-48 mb-4"></div>
				<div className="h-2 rounded-full bg-slate-400 max-w-[365px] mb-2.5"></div>
				<div className="h-2 rounded-full bg-slate-400 mb-2.5"></div>
				<div className="h-2 rounded-full bg-slate-400 max-w-[330px] mb-2.5"></div>
				<div className="h-2 rounded-full bg-slate-400 max-w-[400px] mb-2.5"></div>
				<div className="h-2 rounded-full bg-slate-400 max-w-[360px]"></div>
				<span className="sr-only">Loading...</span>
			</div>
		</CardLayout>

	)
}

export default ParagraphSkeleton
