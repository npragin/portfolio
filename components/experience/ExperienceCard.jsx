import { BaseCard } from "@components"
import { formatDateRange } from "@utils"

const ExperienceCard = ({ data }) => {
	const titleContent = `${data.title} · ${data.company}`

	return (
		<BaseCard
			data={data}
			leftSection={formatDateRange(data.dateStart, data.dateEnd)}
			titleContent={titleContent}
			previousTitles={data.previousTitles}
		/>
	)
}

export default ExperienceCard
