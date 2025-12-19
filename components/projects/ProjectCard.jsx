import Image from "next/image"
import BaseCard from "../common/cards/BaseCard"

const ProjectCard = ({ data }) => {
	const aspectClass = data.squareImage ? "aspect-square" : "aspect-video"

	const leftSection = (isHovered) => (
		<div
			className={`relative w-full ${aspectClass} rounded-md overflow-hidden border-[2px] transition-colors ${isHovered ? "border-slate-500" : "border-slate-700/50"}`}
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
		/>
	)
}

export default ProjectCard
