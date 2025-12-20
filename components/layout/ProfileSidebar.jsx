import Link from "next/link"
import { Github, Linkedin, Mail } from "@icons"
import { NAME, DESIGNATION, SOCIAL_LINKS, BLURB, SECTIONS } from "@constants"
import { useActiveSection } from "@hooks"

const ProfileSidebar = () => {
	const activeSection = useActiveSection()
	return (
		<>
			{/* Header */}
			<div>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
					<Link href="/">{NAME}</Link>
				</h1>
				<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{DESIGNATION}</h2>
				<p className="mt-4 max-w-xs leading-normal text-slate-400">{BLURB}</p>
			</div>

			{/* Middle content */}
			<nav className="nav hidden lg:block" aria-label="In-page jump links">
				<ul className="mt-16 w-max">
					{SECTIONS.map((section) => {
						const isActive = activeSection === section

						return (
							<li key={section}>
								<a className="group flex items-center py-3" href={`#${section}`}>
									<span className={`
									mr-4 h-px transition-all duration-300 motion-reduce:transition-none
									${isActive
								? "w-16 !bg-slate-200"
								: "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
							}
									`}></span>
									<span className={`
										text-xs font-bold uppercase tracking-widest transition-all duration-300
										${isActive
								? "text-slate-200"
								: "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
							}
									`}>
										{section}
									</span>
								</a>
							</li>
						)
					})}
				</ul>
			</nav>

			{/* Social links */}
			<ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
				{[
					{ icon: Mail, link: SOCIAL_LINKS.GMAIL, label: "Email" },
					{ icon: Github, link: SOCIAL_LINKS.GITHUB, label: "GitHub" },
					{ icon: Linkedin, link: SOCIAL_LINKS.LINKEDIN, label: "LinkedIn" },
				].map(({ icon: Icon, link, label }) => (
					<li key={link} className="mr-5 text-xs shrink-0">
						<Link href={link} target="_blank" rel="noopener noreferrer" aria-label={label} className="block text-slate-400 hover:text-slate-200 transition-colors duration-300">
							<Icon size={24} />
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default ProfileSidebar
