import React from "react"

const About = () => {
	return (
		<div className="grid justify-items-left grid-flow-row mx-12 gap-4 px-2 md:px-8 text-md text-slate-400 tracking-wide mb-20" >
			<style jsx>{`
                a {
                    @apply text-slate-200;
                }
            `}</style>
			<p>Around 2012, I stumbled upon&nbsp;
				<a className='text-slate-200 hover:text-violet-500' href="https://www.codecademy.com/" target="_blank" rel="noreferrer">Codecademy</a>
                &nbsp;and discovered the magic of programming.
                Starting with basic scripting and game development, I explored web technologies before discovering my passion for software grounded in hardware experiences.
                Since then, I&apos;ve engineered&nbsp;
				<a className='text-slate-200 hover:text-violet-500' href="https://www.clearscale.com/" target="_blank" rel="noreferrer">cloud solutions for enterprises</a>
                , UAVs for agriculture, and&nbsp;
				<a className='text-slate-200 hover:text-violet-500' href="https://www.global-formula-racing.com/en/" target="_blank" rel="noreferrer">autonomous racecars</a>
                .
			</p>
			<p>
                Today, I am committed to&nbsp;
				<a className='text-slate-200 hover:text-violet-500' href="https://www.linkedin.com/posts/global-formula-racing_unleashing-nostalgia-test-day-throwback-activity-7068290736735047680-Y3xI/" target="_blank" rel="noreferrer">preparing a racecar for competition</a>
                &nbsp;with Global Formula Racing and maintaining a 4.0 GPA since returning to Oregon State University.
                I champion a pragmatic, tool-agnostic approach and am excited to leverage my skills — and a commitment to lifelong learning — to explore new technology and industries.
			</p>
			<p>
                In my free time, I develop algorithms leveraging public data to create fun visualizations like&nbsp;
				<a className='text-slate-200 hover:text-violet-500' href="https://www.linkedin.com/posts/npragin_hey-everyone-ive-been-working-hard-activity-7169460021712314368-134z" target="_blank" rel="noreferrer">color matching Pokémon to sports teams</a>
                .
                Offline, you can find me cooking international food, building a LEGO, watching a movie, hanging out with my cat, and tending to my Animal Crossing island.
			</p>
			<section id="experience"></section>
		</div>
	)
}

export default About
