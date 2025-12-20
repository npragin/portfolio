import { SectionHeader } from "@components"

const About = () => {
	return (
		<section id="about" className="mb-16 md:mb-24 scroll-mt-16 lg:scroll-mt-24 font-light">
			<SectionHeader>About</SectionHeader>
			<div className="text-slate-400">
				<p className="mb-4">
					Around 2012, I stumbled upon{" "}
					<a className="about-link" href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">Codecademy</a>
					{" "}and discovered the magic of programming.
					Starting with basic scripting and game development, I explored web technologies before discovering my passion for software grounded in hardware experiences.
					Since then, I&apos;ve engineered{" "}
					<a className="about-link" href="https://www.sifly.co" target="_blank" rel="noopener noreferrer">UAVs for agriculture</a>
					,{" "}
					<a className="about-link" href="https://www.global-formula-racing.com/en/" target="_blank" rel="noopener noreferrer">autonomous racecars</a>
					, and{" "}
					<a className="about-link" href="https://www.clearscale.com/" target="_blank" rel="noopener noreferrer">cloud solutions for enterprises</a>.
				</p>
				<p className="mb-4">
					Today, I am committed to{" "}
					<a className="about-link" href="https://www.linkedin.com/posts/global-formula-racing_unleashing-nostalgia-test-day-throwback-activity-7068290736735047680-Y3xI/" target="_blank" rel="noopener noreferrer">preparing a racecar for competition</a>
					{" "}with Global Formula Racing and maintaining a 4.0 GPA since returning to Oregon State University.
					I champion a pragmatic, tool-agnostic approach and am excited to leverage my skills — and a commitment to lifelong learning — to explore new technology and industries.
				</p>
				<p className="mb-4">
					In my free time, I develop algorithms leveraging public data to create fun visualizations like{" "}
					<a className="about-link" href="https://www.linkedin.com/posts/npragin_hey-everyone-ive-been-working-hard-activity-7169460021712314368-134z" target="_blank" rel="noopener noreferrer">color matching Pokémon to sports teams</a>.
					Offline, you can find me cooking international food, building a LEGO, watching a movie, hanging out with my cat, and tending to my Animal Crossing island.
				</p>
			</div>
		</section>
	)
}

export default About
