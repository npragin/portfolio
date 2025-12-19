const Tools = ({ tools }) => {
	return (
		<div className="flex flex-wrap gap-2">
			{tools.map((item) => (
				<span
					key={item}
					className="py-2 px-3 text-xs text-violet-500 bg-violet-600/10 rounded-full"
				>
					{item}
				</span>
			))}
		</div>
	)
}

export default Tools
