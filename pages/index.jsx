import Head from "next/head"
import { MyExperience } from "@components"
import { About } from "@components"

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
