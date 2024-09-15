import React from "react"

const Footer = () => {
	return (
		<div className="mb-10 ml-10 mr-10 pb-24">
			<div className="flex flex-col h-10 items-center justify-between text-sm text-slate-400/70 md:px-4 w-full">
				<p className="pb-4">
					Inspired by&nbsp;
					<a href="https://brittanychiang.com/" className="text-slate-200/70 hover:text-violet-500">Brittany Chiang</a>
					&nbsp;and coded in&nbsp;
					<a href="https://code.visualstudio.com/" className="text-slate-200/70 hover:text-violet-500">Visual Studio Code</a>
					&nbsp;by yours truly.
					Built with&nbsp;
					<a href="https://nextjs.org/" className="text-slate-200/70 hover:text-violet-500">Next.js</a>
					&nbsp;and&nbsp;
					<a href="https://tailwindcss.com/" className="text-slate-200/70 hover:text-violet-500">Tailwind CSS</a>
					, deployed with&nbsp;
					<a href="https://vercel.com/" className="text-slate-200/70 hover:text-violet-500">Vercel</a>.
				</p>
				<p className="w-full">
                    Thank you for visiting my website,&nbsp;
					<span className="peace-cursor-emoji group inline-block">
						<span className="group-hover:text-violet-500 transition-colors duration-300 border-b border-violet-500">Peace</span>
					</span>
                    &nbsp;and&nbsp;
					<span className="love-cursor-emoji group inline-block">
						<span className="group-hover:text-violet-500 transition-colors duration-300 border-b border-violet-500">Love</span>
					</span>
                    .
				</p>
			</div>
		</div>
	)
}

export default Footer
