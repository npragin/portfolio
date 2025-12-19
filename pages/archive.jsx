import Head from "next/head"
import Link from "next/link"
import { PROJECTS } from "@constants"
import { ArchiveLayout, Tools, ArrowLink } from "@components"
import { ArrowLeft } from "@icons"

// TODO(npragin): Fix spacing around the main content on all pages
// TODO(npragin): Fix font for the table header, shouldn't be so bolded
// TODO(npragin): view full resume and project archive links are too close to the left edge (compare against card left edge)

const Archive = () => {
	// Sort projects by year (newest first)
	const sortedProjects = [...PROJECTS].sort((a, b) => parseInt(b.year) - parseInt(a.year))

	return (
		<div className="min-h-screen">
			<Head>
				<title>Archive | Noah Pragin</title>
			</Head>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
				<Link
					href="/"
					className="group inline-flex items-center gap-2 text-violet-500 font-circular-medium font-bold"
				>
					<ArrowLeft
						size={16}
						className="transition-transform group-hover:-translate-x-1 -translate-y-px"
					/>
					Noah Pragin
				</Link>
				<h1 className="text-4xl font-bold md:text-5xl text-slate-200 mb-2">
					All Projects
				</h1>
				<div className="mt-12">
					<table className="w-full border-collapse">
						<thead className="sticky top-0 z-10">
							<tr className="border-b border-slate-700/30 backdrop-blur-sm">
								<th scope="col" className="text-left py-4 px-4 text-sm font-circular-medium text-slate-200">
									Year
								</th>
								<th scope="col" className="text-left py-4 px-4 text-sm font-circular-medium text-slate-200">
									Project
								</th>
								<th scope="col" className="text-left py-4 px-4 text-sm font-circular-medium text-slate-200">
									Built with
								</th>
								<th scope="col" className="text-left py-4 px-4 text-sm font-circular-medium text-slate-200">
									Link
								</th>
							</tr>
						</thead>
						<tbody>
							{sortedProjects.map((project) => (
								<tr
									key={project.id}
									className="border-b border-slate-700/50 transition-colors"
								>
									<td className="py-4 px-4 text-sm text-slate-400 font-circular">
										{project.year}
									</td>
									<td className="py-4 px-4">
										<span className="text-slate-200 font-circular font-bold">
											{project.title}
										</span>
									</td>
									<td className="py-4 px-4">
										<div className="flex flex-wrap">
											<Tools tools={project.tags} />
										</div>
									</td>
									<td className="py-4 px-4">
										{project.link ? (
											<ArrowLink
												href={project.link}
												className="text-slate-400 hover:text-violet-500 transition-colors font-circular text-sm"
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
		</div>
	)
}

Archive.getLayout = (page) => <ArchiveLayout>{page}</ArchiveLayout>

export default Archive
