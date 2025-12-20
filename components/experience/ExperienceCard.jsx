import { BaseCard } from "@components"

const ExperienceCard = ({ data }) => {
	const titleContent = `${data.title} · ${data.company}`

	return (
		<BaseCard
			data={data}
			leftSection={data.date}
			titleContent={titleContent}
			previousTitles={data.previousTitles}
		/>
	)
}

export default ExperienceCard
