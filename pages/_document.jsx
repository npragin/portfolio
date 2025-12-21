import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html lang="en" className="no-scrollbar">
			<Head>
				<link rel="icon" href="/favicon.svg" sizes="any" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
