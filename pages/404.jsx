import Error from "next/error"
import { BaseLayout } from "@components"

const NotFound = () => {
	return (
		<BaseLayout>
			<style jsx global>{`
				.next-error-h1 {
					font-weight: 400 !important;
				}
				.next-error-h1 + div h2 {
					font-weight: 300 !important;
				}
			`}</style>
			<div className="min-h-screen bg-primary text-slate-400">
				<Error statusCode={404} />
			</div>
		</BaseLayout>
	)
}

NotFound.getLayout = (page) => page

export default NotFound
