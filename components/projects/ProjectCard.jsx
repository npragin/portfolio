import Image from "next/image"
import { BaseCard } from "@components"

const ProjectCard = ({ data }) => {
	const aspectClass = data.squareImage ? "aspect-square" : "aspect-video"

	const leftSection = () => (
		<div
			className={`relative w-full ${aspectClass} rounded-md overflow-hidden border-2 border-slate-700/50 transition-colors group-hover:border-slate-500`}
		>
			<Image
				src={data.image}
				alt={data.title}
				fill
				className="object-cover"
			/>
		</div>
	)

	return (
		<BaseCard
			data={data}
			leftSection={leftSection}
			titleContent={data.title}
			toolsKey="tags"
			isImageCard
		/>
	)
}

export default ProjectCard
