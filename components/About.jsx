import { SectionHeader } from "@components"

const About = () => {
	return (
		<section id="about" className="mb-16 md:mb-24 scroll-mt-24 font-light">
			<SectionHeader>About</SectionHeader>
			<div className="text-slate-400">
				<p className="mb-4">
					Around 2012, I stumbled upon{" "}
					<a className="about-link" href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">Codecademy</a>
					{" "}and discovered the magic of programming.
					Starting with basic scripting and game development, I explored web and cloud technologies before discovering my passion for software grounded in hardware experiences.
					Since then, I&apos;ve engineered software for {" "}
					<a className="about-link" href="https://www.anduril.com/altius" target="_blank" rel="noopener noreferrer">tube-launched fixed-wing UAVs</a>
					,{" "}
					<a className="about-link" href="https://www.sifly.co" target="_blank" rel="noopener noreferrer">world-record-breaking quadcopters</a>
					,{" "}
					<a className="about-link" href="https://www.global-formula-racing.com/en/" target="_blank" rel="noopener noreferrer">autonomous racecars</a>
					, and{" "}
					<a className="about-link" href="https://engineering.oregonstate.edu/all-stories/putting-robots-work-down-farm" target="_blank" rel="noopener noreferrer">apple-picking robots</a>
					.
				</p>
				<p className="mb-4">
					As I complete my degree at Oregon State, I&apos;m leading SLAM development for{" "}
					<a className="about-link" href="https://www.linkedin.com/posts/global-formula-racing_unleashing-nostalgia-test-day-throwback-activity-7068290736735047680-Y3xI/" target="_blank" rel="noopener noreferrer">Global Formula Racing&apos;s autonomous system</a>
					, researching point cloud-based reinforcement learning in{" "}
					<a className="about-link" href="https://mime.engineering.oregonstate.edu/research/drl/people.html" target="_blank" rel="noopener noreferrer">DRAIL</a>
					, and preparing to rejoin{" "}
					<a className="about-link" href="https://www.anduril.com/" target="_blank" rel="noopener noreferrer">Anduril</a>
					{" "}full-time in Atlanta after graduation.
					I champion a pragmatic, tool-agnostic approach and am committed to lifelong learning as I explore new technology and industries.
				</p>
				<p className="mb-4">
					In my free time, I leverage public data to create fun visualizations, like{" "}
					<a className="about-link" href="https://www.linkedin.com/posts/npragin_hey-everyone-ive-been-working-hard-activity-7169460021712314368-134z" target="_blank" rel="noopener noreferrer">color-matching Pokémon to sports teams</a>.
					Offline, you can find me cooking international food, building a LEGO,{" "}
					<a className="about-link" href="https://letterboxd.com/npragin/" target="_blank" rel="noopener noreferrer">watching a movie</a>
					, hanging out with my cats, and tending to my Animal Crossing island.
				</p>
			</div>
		</section>
	)
}

export default About
