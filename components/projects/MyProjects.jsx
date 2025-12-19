import React from "react"
import Link from "next/link"
import { ProjectCard } from "@components"
import { PROJECTS, SELECTED_PROJECTS } from "@constants"
import { LuArrowRight as ArrowRight } from "react-icons/lu"

const MyProjects = () => {
	return (
		<section id="projects">
			<div className="grid justify-items-center grid-flow-row m-1 gap-4 px-2 pt-12 md:px-8">
				{
					SELECTED_PROJECTS.map((data, key) => (
						<ProjectCard key={key} data={PROJECTS[data]} />
					))
				}
			</div>
			<div className="mt-8 px-2 md:px-8">
				<Link
					href="/archive"
					className="group inline-flex items-center gap-2 text-slate-200 underline decoration-2 decoration-transparent hover:decoration-violet-500 underline-offset-4 transition-colors duration-300"
				>
					View Full Project Archive
					<ArrowRight
						size={16}
						className="transition-transform group-hover:translate-x-1"
					/>
				</Link>
			</div>
		</section>
	)
}

export default MyProjects
