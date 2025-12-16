import Head from "next/head"
import { About, MyExperience, MyProjects, Footer } from "@components"

const home = () => {
	return (
		<div className="-z-10">
			<Head>
				<title>Noah Pragin</title>
			</Head>
			<About />
			<MyExperience/>
			<MyProjects/>
			<Footer/>
		</div>
	)
}

export default home
