const Tools = ({ tools, compact = false }) => {
	return (
		<>
			{tools.map((item) => (
				<li key={item} className={compact ? "my-1 mr-1.5" : "mr-1.5 mt-2"}>
					<div className="flex items-center rounded-full bg-violet-600/10 px-3 py-1 text-xs font-semibold leading-5 text-violet-500">
						{item}
					</div>
				</li>
			))}
		</>
	)
}

export default Tools
