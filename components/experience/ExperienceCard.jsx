import React from "react"
import CardLayout from "../common/cards/CardLayout"
import Tools from "./Tools"
import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const ExperienceCard = ({ data }) => {
	const [isHovered, setIsHovered] = useState(false)

	const cardContent = (
		<div
			className="flex h-full space-y-2 p-4 pt-1 card_stylings relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{data.link && (
				<div className="absolute top-2 right-2 transition-all">
					<ArrowUpRight
						className={`transition-all ${
							isHovered ? "text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1" : "text-slate-200"
						}`}
						size={20}
					/>
				</div>
			)}
			<div className="w-[25%] justify-center p-2 m-1">
				<div className="text-slate-500 text-sm">{data.date}</div>
			</div>
			<div className="w-[75%] justify-center">
				<div className={`text-md tracking-wide transition-colors ${isHovered && data.link ? "text-violet-500" : "text-slate-200"}`}>
					{`${data.title} • ${data.company}`}
				</div>
				{data.previousTitles &&
                    <div className="text-slate-400 text-md tracking-wide">{data.previousTitles}</div>
				}
				<div className="text-sm text-slate-400 font-normal pt-3">
					{data.desc}
				</div>
				{data.tools &&
                    <Tools tools={data.tools}/>
				}
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

export default ExperienceCard
