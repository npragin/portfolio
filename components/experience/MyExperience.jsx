import Link from "next/link"
import { ExperienceCard } from "@components"
import { ArrowUpRight } from "@icons"
import { EXPERIENCE } from "@constants"

const MyExperience = () => {
	return (
		<section id="experience">
			<div className="grid justify-items-center grid-flow-row m-1 gap-4 px-2 pt-20 md:px-8">
				{
					EXPERIENCE.map((data) => (
						<ExperienceCard key={data.id} data={data} />
					))
				}
			</div>
			<div className="flex ml-10 mt-8">
				<Link
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-slate-200 link-transition cursor-pointer group"
				>
					<span className="mr-2">View Full R&eacute;sum&eacute;</span>
					<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform mb-0.5" />
				</Link>
			</div>
		</section>
	)
}

export default MyExperience
