import Head from "next/head"
import { About, MyExperience, MyProjects, Footer } from "@components"
import { NAME, BLURB } from "@constants"

const Home = () => {
	return (
		<div className="-z-10">
			<Head>
				<title>{NAME}</title>
				<meta name="description" content={BLURB} />
				<meta property="og:title" content={NAME} />
				<meta property="og:description" content={BLURB} />
				<meta property="og:type" content="website" />
			</Head>
			<About />
			<MyExperience />
			<MyProjects />
			<Footer />
		</div>
	)
}

export default Home
