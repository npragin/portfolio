const Tooltip = ({ children, content, className = "" }) => {
	return (
		<span className={`group relative inline-flex ${className}`}>
			{children}
			<span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
				{/* Arrow */}
				<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[7px] border-4 border-transparent border-b-slate-700" />
				<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[5px] border-4 border-transparent border-b-slate-800" />
				<span className="relative block w-max max-w-xs rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-normal text-slate-300 shadow-lg">
					{content}
				</span>
			</span>
		</span>
	)
}

export default Tooltip
