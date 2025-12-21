const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const getYear = (dateStr) => {
	if (!dateStr || dateStr === "present") {
		return null
	}
	return dateStr.split("-")[0]
}

const formatDate = (dateStr, includeYear = true) => {
	if (dateStr === "present") {
		return "Present"
	}
	const [year, month] = dateStr.split("-")
	if (month) {
		const monthName = MONTH_NAMES[parseInt(month, 10) - 1]
		return includeYear ? `${monthName} ${year}` : monthName
	}
	return year
}

export const formatDateRange = (startDate, endDate) => {
	if (!startDate) {
		return ""
	}

	const startYear = getYear(startDate)
	const endYear = getYear(endDate)
	const sameYear = startYear && endYear && startYear === endYear

	const start = formatDate(startDate, !sameYear)
	const end = endDate ? formatDate(endDate) : null

	if (!end || start === end) {
		return formatDate(startDate)
	}

	return `${start} — ${end}`
}
