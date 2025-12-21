import "@styles/globals.css"
import { Layout } from "@components"

const App = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
	return getLayout(<Component {...pageProps} />)
}

export default App
