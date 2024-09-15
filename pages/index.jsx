import MyExperience from "../components/experience/MyExperience"
import About from "../components/About"
import Head from "next/head"

const home = () => {
	return (
		<div className="Home-Page -z-10 -">
			<Head>
				<title>Noah Pragin</title>
			</Head>
			<About />
			<MyExperience/>
		</div>
	)
}

export default home
