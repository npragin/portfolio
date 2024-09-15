const Tools = ({ tools }) => {
	return (
		<div className='flex flex-col space-y-1 pt-4'>
			<div className='flex flex-col gap-y-4'>
				<div className='flex flex-wrap gap-2'>
					{tools.map((item, index) => (
						<span
							key={index}
							className='py-2 px-3 text-xs text-violet-500 bg-violet-600/10 rounded-full'
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default Tools
