import { React, useState } from "react"
import Link from "next/link"
import { LuArrowUpRight as ArrowUpRight } from "react-icons/lu"
import { CardLayout, Tools } from "@components"

const BaseCard = ({ data, leftSection, titleContent, previousTitles, toolsKey = "tools" }) => {
	const [isHovered, setIsHovered] = useState(false)

	const cardContent = (
		<div
			className={`flex h-full space-y-2 p-4 pt-1 card_stylings relative border-t transition-colors ${isHovered ? "border-slate-500/40" : "border-transparent"}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{data.link && (
				<div className="absolute top-0 right-0 p-4 transition-all">
					<ArrowUpRight
						className={`transition-all ${
							isHovered ? "text-violet-500 translate-x-1 -translate-y-1" : "text-slate-200"
						}`}
						size={20}
					/>
				</div>
			)}
			<div className="w-[25%] flex items-start justify-center p-2 m-1">
				{typeof leftSection === "function" ? leftSection(isHovered) : leftSection}
			</div>
			<div className="w-[75%] justify-center p-2">
				<div className={`text-md tracking-wide transition-colors ${isHovered && data.link ? "text-violet-500" : "text-slate-200"}`}>
					{titleContent}
				</div>
				{previousTitles && (
					<div className="text-slate-400 text-md tracking-wide">{previousTitles}</div>
				)}
				<div className="text-sm text-slate-400 font-normal pt-3">
					{data.desc}
				</div>
				{data[toolsKey] && (
					<Tools tools={data[toolsKey]} />
				)}
			</div>
		</div>
	)

	if (data.link) {
		return (
			<Link href={data.link} target="_blank" rel="noopener noreferrer">
				<CardLayout className="cursor-pointer">
					{cardContent}
				</CardLayout>
			</Link>
		)
	}

	return <CardLayout>{cardContent}</CardLayout>
}

export default BaseCard
