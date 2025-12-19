import { BaseCard } from "@components"

const ExperienceCard = ({ data }) => {
	const leftSection = (
		<div className="text-slate-500 text-sm">{data.date}</div>
	)

	const titleContent = `${data.title} • ${data.company}`

	return (
		<BaseCard
			data={data}
			leftSection={leftSection}
			titleContent={titleContent}
			previousTitles={data.previousTitles}
			toolsKey="tools"
		/>
	)
}

export default ExperienceCard
