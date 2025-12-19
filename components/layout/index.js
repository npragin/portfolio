import { ProfileSidebar, BaseLayout } from "@components"

export default function Layout({ children }) {
	return (
		<BaseLayout className="flex flex-col">
			<div className="flex relative justify-center gap-x-4">
				{/* left column */}
				<div className="w-full lg:w-1/3 sticky top-0 h-screen max-w-md">
					<ProfileSidebar />
				</div>

				{/* right column */}
				<div className="w-full lg:w-1/2 max-w-2xl">
					{children}
				</div>
			</div>
		</BaseLayout>
	)
}
