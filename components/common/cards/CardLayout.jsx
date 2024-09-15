import React from "react"

const CardLayout = ({ children, className = "h-full w-full" }) => {
	return (
		<div className={`${className} boxShadow hover:transition-all !duration-200 ease-linear rounded-xl`}>
			{children}
		</div>
	)
}

export default CardLayout
