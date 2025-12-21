import { Tools } from "@components"
import { ArrowUpRight } from "@icons"

const BaseCard = ({ data, leftSection, titleContent, previousTitles, toolsKey = "tools", isImageCard = false }) => {
	const cardInner = (
		<>
			{/* Hover background - only visible on lg screens */}
			<span className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-violet-500/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>

			{/* Left column - date or image */}
			<div className={`z-10 mb-2 sm:col-span-2 ${isImageCard ? "sm:order-first" : "mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500"}`}>
				{typeof leftSection === "function" ? leftSection() : leftSection}
			</div>

			{/* Content column */}
			<div className="z-10 sm:col-span-6">
				<h3 className="font-medium leading-snug text-slate-200">
					<div>
						{data.link ? (
							<a
								href={data.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-violet-500 focus-visible:text-violet-500 group/link"
							>
								<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
								<span>
									{titleContent}
									<ArrowUpRight size={16} className="ml-1 inline-block shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
								</span>
							</a>
						) : (
							<span className="text-base font-medium leading-tight text-slate-200">
								{titleContent}
							</span>
						)}
					</div>
				</h3>
				{previousTitles && (
					<div className="text-slate-400 text-sm mt-0.5">{previousTitles}</div>
				)}
				<p className="mt-2 text-sm leading-normal font-light text-slate-400">
					{data.desc}
				</p>
				{data[toolsKey] && (
					<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
						<Tools tools={data[toolsKey]} />
					</ul>
				)}
			</div>
		</>
	)

	return (
		<li className="mb-12">
			<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				{cardInner}
			</div>
		</li>
	)
}

export default BaseCard
