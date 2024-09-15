const experience = [
	{
		id: 0,
		title: "Software Engineer, Intern",
		previousTitles: [],
		date: "Jun 2024 - Sep 2024",
		company: "Stealth Startup (Drones)",
		desc: "At this UAV startup, I collaborated with a diverse team to deliver safety-critical software and a cloud-based fleet management platform. I enabled ML analytics, improved network performance, enhanced WebRTC security, and rapidly developed RESTful APIs. Through proactive teamwork, I contributed to meeting aggressive deadlines for the Alpha launch.",
		tools: [
			"Embedded Software",
			"Django",
			"WebRTC",
			"PostgreSQL",
			"MQTT",
			"React",
		],
	},
	{
		id: 1,
		title: "Automated Systems Engineer",
		previousTitles: [],
		date: "Feb 2024 — Present",
		company: "Global Formula Racing",
		desc: "As part of an international team, I manage autonomous racecar software projects from concept to integration. I streamlined the debugging process and coordinate with alumnae and faculty advisors to prepare our vehicle for global competitions.",
		tools: [
			"Embedded Software",
			"ROS",
			"C++",
			"Robotics",
			"Computer Vision",
		],
		link: "https://www.global-formula-racing.com/en/",
	},
	{
		id: 2,
		title: "Application Developer",
		previousTitles: ["Application Developer, Intern"],
		date: "2022 — 2023",
		company: "ClearScale",
		desc: "I developed a web application and RESTful API for monitoring cloud infrastructure in an agile team environment. Through client interviews and customer journey mapping, I drove a significant increase in customer enrollment. I consistently exceeded sprint goals, quickly resolved urgent issues, and effectively communicated progress to stakeholders.",
		tools: [
			"React",
			"Node.js",
			"TypeScript",
			"AWS",
			"NoSQL",
		],
		link: "https://www.clearscale.com/",
	},
	{
		id: 3,
		title: "Software Intern",
		previousTitles: [],
		date: "Mar — May 2019",
		company: "Tutree",
		desc: "As the team lead, I guided a group of interns through the full lifecycle of creating the company website. By setting project timelines, providing technical training, and leveraging analytics tools, I ensured we delivered an engaging site that met business objectives and deadlines.",
		tools: [
			"HTML",
			"CSS",
			"PHP",
			"Bootstrap",
			"JQuery",
		],
		link: "https://tutree.com/",
	},
	{
		id: 4,
		title: "Swim Instructor",
		previousTitles: [],
		date: "May — Aug 2018",
		company: "City of Mountain View",
		desc: "I taught swimming to children aged 6-16, including those with special needs. I brought energy, patience, and empathy to every lesson, qualities I strive to embody today.",
		link: "https://www.mountainview.gov/our-city/departments/community-services/recreation/aquatics-pools/swim-lessons",
	},
]

export default function handler(req, res) {
	res.status(200).json(experience)
}
