import "@styles/globals.css"
import { Layout } from "@components"

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
	return getLayout(<Component {...pageProps} />)
}
