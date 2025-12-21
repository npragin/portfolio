import { ExperienceCard, ArrowLink, SectionHeader } from "@components"
import { EXPERIENCE } from "@constants"

const MyExperience = () => {
	return (
		<section id="experience" className="mb-16 md:mb-24 scroll-mt-24">
			<SectionHeader>Experience</SectionHeader>
			<div>
				<ol className="group/list">
					{
						EXPERIENCE.map((data) => (
							<ExperienceCard key={data.id} data={data} />
						))
					}
				</ol>
			</div>
			<div className="mt-12">
				<ArrowLink
					href="/resume.pdf"
					className="text-slate-200 link-transition cursor-pointer font-semibold"
				>
					View Full R&eacute;sum&eacute;
				</ArrowLink>
			</div>
		</section>
	)
}

export default MyExperience
