import React from "react"
import { ProjectCard } from "@components"
import { PROJECTS, SELECTED_PROJECTS } from "@constants"

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
		</section>
	)
}

export default MyProjects
