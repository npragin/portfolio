import Link from "next/link"
import { ArrowUpRight } from "@icons"

const ArrowLink = ({ href, children, className = "", external = false }) => {
	const isExternal = external || href.startsWith("http")

	const linkContent = (
		<>
			{children}
			<ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
		</>
	)

	const baseClassName = `group inline-flex items-center gap-2 ${className}`

	if (isExternal) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={baseClassName}
			>
				{linkContent}
			</a>
		)
	}

	return (
		<Link
			href={href}
			className={baseClassName}
		>
			{linkContent}
		</Link>
	)
}

export default ArrowLink
