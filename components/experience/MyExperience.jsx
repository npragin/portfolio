import { ExperienceCard, ArrowLink } from "@components"
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
				<ArrowLink
					href="/resume.pdf"
					className="text-slate-200 link-transition cursor-pointer"
				>
					View Full R&eacute;sum&eacute;
				</ArrowLink>
			</div>
		</section>
	)
}

export default MyExperience
