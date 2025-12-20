import Link from "next/link"
import { ProjectCard, SectionHeader } from "@components"
import { ArrowRight } from "@icons"
import { PROJECTS, SELECTED_PROJECTS } from "@constants"

const MyProjects = () => {
	return (
		<section id="projects" className="mb-16 md:mb-24 scroll-mt-16 lg:scroll-mt-24">
			<SectionHeader>Projects</SectionHeader>
			<div className="grid grid-flow-row gap-4">
				{
					SELECTED_PROJECTS.map((projectId) => {
						const project = PROJECTS.find(p => p.id === projectId)
						return <ProjectCard key={project.id} data={project} />
					})
				}
			</div>
			<div className="mt-12">
				<Link
					href="/archive"
					className="group inline-flex items-center gap-2 text-slate-200 underline decoration-2 decoration-transparent hover:decoration-violet-500 underline-offset-4 transition-colors duration-300 font-semibold"
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
