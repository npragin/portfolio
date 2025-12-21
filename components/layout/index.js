import { ProfileSidebar, BaseLayout } from "@components"

export default function Layout({ children }) {
	return (
		<BaseLayout className="flex flex-col">
			<div className="page-container">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
						<ProfileSidebar />
					</header>
					<main className="pt-24 lg:w-[52%] lg:py-24">
						{children}
					</main>
				</div>
			</div>
		</BaseLayout>
	)
}
