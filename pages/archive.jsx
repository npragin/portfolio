import Head from "next/head"
import Link from "next/link"
import { PROJECTS } from "@constants"
import { ArchiveLayout, Tools, ArrowLink } from "@components"
import { ArrowLeft } from "@icons"

const Archive = () => {
	// Sort projects by year (newest first)
	const sortedProjects = [...PROJECTS].sort((a, b) => parseInt(b.year) - parseInt(a.year))

	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
			<Head>
				<title>Archive | Noah Pragin</title>
			</Head>
			<div className="lg:py-24">
				<Link
					href="/"
					className="group mb-2 inline-flex items-center font-semibold leading-tight text-violet-500"
				>
					<ArrowLeft
						size={16}
						className="mr-1 transition-transform group-hover:-translate-x-2"
					/>
					Noah Pragin
				</Link>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
					All Projects
				</h1>
				<table className="mt-12 w-full border-collapse text-left">
					<thead className="sticky top-0 z-10 border-b border-slate-300/10 backdrop-blur">
						<tr>
							<th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
							<th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
							<th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
							<th className="hidden py-4 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
						</tr>
					</thead>
					<tbody>
						{sortedProjects.map((project, index) => (
							<tr
								key={project.id}
								className={`border-b border-slate-300/10 ${index === sortedProjects.length - 1 ? "border-none" : ""}`}
							>
								<td className="py-4 pr-4 align-top text-sm text-slate-500">
									<div className="translate-y-px">{project.year}</div>
								</td>
								<td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
									<div>
										{/* Mobile: title as link */}
										<div className="block sm:hidden">
											{project.link ? (
												<ArrowLink
													href={project.link}
													className="hover:text-violet-500 focus-visible:text-violet-500"
												>
													{project.title}
												</ArrowLink>
											) : (
												project.title
											)}
										</div>
										{/* Desktop: plain title */}
										<div className="hidden sm:block">
											{project.title}
										</div>
									</div>
								</td>
								<td className="hidden py-4 pr-4 align-top lg:table-cell">
									<ul className="flex -translate-y-1.5 flex-wrap">
										<Tools tools={project.tags} />
									</ul>
								</td>
								<td className="hidden py-4 align-top sm:table-cell">
									{project.link ? (
										<ArrowLink
											href={project.link}
											className="text-sm text-slate-400 hover:text-violet-500 focus-visible:text-violet-500"
											iconSize={14}
										>
											{new URL(project.link).hostname.replace("www.", "")}
										</ArrowLink>
									) : (
										<span className="text-slate-600 text-sm">—</span>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

Archive.getLayout = (page) => <ArchiveLayout>{page}</ArchiveLayout>

export default Archive
