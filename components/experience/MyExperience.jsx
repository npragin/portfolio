import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { LuArrowUpRight as ArrowUpRight } from "react-icons/lu"
import { ExperienceCard } from "@components"
import { ParagraphSkeleton } from "@components"
import { experience } from "/constants"

const MyExperience = () => {
	return (
		<>
			<div className="grid justify-items-center grid-flow-row m-1 gap-4 px-2 md:px-8">
				{
					experience.map((data, key) => (
						<ExperienceCard key={key} data={data} />
					))
				}
			</div>
			<div className="flex ml-10 mt-8 pb-24">
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-slate-200 link-transition cursor-pointer group"
				>
					<span className="mr-2">View Full R&eacute;sum&eacute;</span>
					<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
				</a>
			</div>
		</>
	)
}

export default MyExperience
