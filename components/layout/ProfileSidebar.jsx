import React from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { NAME, DESIGNATION, SOCIAL_LINKS, BLURB } from "../../constants/constants"

const ProfileSidebar = () => {
	return (
		<div className="flex flex-col h-full">
			{/* Header */}
			<div className='headerr flex-shrink-0 pt-14'>
				<div className='flex flex-col items-start justify-center'>
					<span className='text-4xl font-bold text-slate-200 sm:text-5xl'>{NAME}</span>
					<span className='mt-3 text-lg font-medium text-slate-200 sm:text-xl'>{DESIGNATION}</span>
					<span className='mt-4 max-w-xs tracking-wide text-slate-400'>{BLURB}</span>
				</div>
			</div>

			{/* Middle content */}
			<nav className="nav flex-grow overflow-y-auto no-scrollbar" aria-label="In-page jump links">
				<ul className="mt-16 w-max">
					{["about", "experience"].map((section) => (
						<li key={section}>
							<a className="group flex items-center py-3" href={`#${section}`}>
								<span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
								<span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
									{section}
								</span>
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Footer */}
			<div className='mt-auto pt-8 pb-16 flex-shrink-0'>
				<div className='text-slate-400 flex justify-start space-x-5 text-xl items-center'>
					{[
						{ icon: MdOutlineEmail, link: SOCIAL_LINKS.GMAIL },
						{ icon: FaLinkedin, link: SOCIAL_LINKS.LINKEDIN },
						{ icon: FaGithub, link: SOCIAL_LINKS.GITHUB },
						{ icon: FaInstagram, link: SOCIAL_LINKS.INSTAGRAM },
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
