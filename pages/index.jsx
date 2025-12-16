import Head from "next/head"
import { About, MyExperience, Footer } from "@components"

const home = () => {
	return (
		<div className="-z-10">
			<Head>
				<title>Noah Pragin</title>
			</Head>
			<About />
			<MyExperience/>
			<Footer/>
		</div>
	)
}

export default home
