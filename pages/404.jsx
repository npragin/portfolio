import Error from "next/error"
import { BaseLayout } from "@components"

const NotFound = () => {
	return (
		<BaseLayout>
			<div className="min-h-screen bg-primary text-slate-400">
				<Error statusCode={404} />
			</div>
		</BaseLayout>
	)
}

NotFound.getLayout = (page) => page

export default NotFound
