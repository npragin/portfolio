import React from "react"
import Link from "next/link"
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa"
import { LuMail as Mail } from "react-icons/lu"
import { NAME, DESIGNATION, SOCIAL_LINKS, BLURB } from "@constants"

const ProfileSidebar = ({ activeSection }) => {
	return (
		<div className="flex flex-col h-full pt-20">
			{/* Header */}
			<div className='header shrink-0'>
				<div className='flex flex-col items-start justify-center'>
					<span className='text-4xl font-bold text-slate-200 sm:text-5xl'>{NAME}</span>
					<span className='mt-3 text-lg font-medium text-slate-200 sm:text-xl'>{DESIGNATION}</span>
					<span className='mt-4 max-w-xs tracking-wide text-slate-400'>{BLURB}</span>
				</div>
			</div>

			{/* Middle content */}
			<nav className="nav grow overflow-y-auto" aria-label="In-page jump links">
				<ul className="mt-16 w-max">
					{["about", "experience"].map((section) => {
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

			{/* Footer */}
			<div className='mt-auto pt-8 pb-16 shrink-0'>
				<div className='text-slate-400 flex justify-start space-x-5 text-xl items-center'>
					{[
						{ icon: Mail, link: SOCIAL_LINKS.GMAIL },
						{ icon: Linkedin, link: SOCIAL_LINKS.LINKEDIN },
						{ icon: Github, link: SOCIAL_LINKS.GITHUB },
					].map(({ icon: Icon, link }, index) => (
						<Link key={index} href={link} target='_blank' rel='noreferrer'>
							<div className="transition-colors duration-300 hover:text-slate-200">
								<Icon size={24} />
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProfileSidebar
