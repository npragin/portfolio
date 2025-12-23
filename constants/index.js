export const SECTIONS = ["about", "experience", "projects"]

export const NAME = "Noah Pragin"

export const DESIGNATION = "C.S. @ Oregon State University"

export const BLURB = "I build autonomous systems for robots spanning defense, agriculture, and racing."

export const SOCIAL_LINKS = {
	GMAIL: "mailto:npragin@gmail.com",
	GITHUB: "https://github.com/npragin",
	LINKEDIN: "https://www.linkedin.com/in/npragin/",
}

export const EXPERIENCE = [
	{
		id: 0,
		title: "Software Engineer, Intern",
		dateStart: "2025-06",
		dateEnd: "2025-09",
		company: "Anduril Industries",
		desc: "I architected safety-critical behavior trees for UAV autonomy, contributing foundational mission and fail-safe behaviors. I built embedded Rust middleware for seamless autonomy-autopilot communication and developed a state management system that met strict real-time constraints for coordinate transformations and synchronized data fetching.",
		tools: [
			"Python",
			"Rust",
			"Behavior Trees",
			"Embedded Software",
		],
		link: "https://www.anduril.com/",
	},
	{
		id: 1,
		title: "Undergraduate Research Assistant",
		dateStart: "2024-09",
		dateEnd: "present",
		company: "CoRIS Institute",
		desc: "I work with faculty and grad students on an autonomous agricultural robot that navigates orchards, picks apples, and prunes branches. I've tuned Kalman filters to boost apple localization accuracy and improved reinforcement learning sim-to-real by improving synthetic orchard data generation using Blender. Separately, I've implemented neural networks for point clouds as a preprocessing step for RL training and contrasted their effects on sim-to-real transfer performance for robotic pick-and-place tasks.",
		tools: [
			"ROS",
			"Blender",
			"Gymnasium",
			"DNNs",
			"Franka Panda",
		],
		link: "https://engineering.oregonstate.edu/CoRIS",
	},
	{
		id: 2,
		title: "Software Engineer, Intern",
		dateStart: "2024-06",
		dateEnd: "2024-09",
		company: "SiFly Aviation",
		desc: "At this UAV startup, I contributed to SiFly's world-record 3+ hour electric drone flight by delivering software across the entire stack. I built a cloud-based fleet management platform, enabled ML analytics on telemetry data, improved network performance for mission-critical data flows, enhanced WebRTC security, and rapidly developed RESTful APIs. Through proactive teamwork, I helped meet aggressive Alpha launch deadlines.",
		tools: [
			"Embedded Software",
			"Django",
			"WebRTC",
			"PostgreSQL",
			"MQTT",
			"React",
		],
		link: "https://sifly.co",
	},
	{
		id: 3,
		title: "Autonomous Systems Engineer",
		dateStart: "2024-02",
		dateEnd: "present",
		company: "Global Formula Racing",
		desc: "As part of an international team, I manage autonomous racecar software projects from concept to integration. I led SLAM and Sensor Fusion integration following a major rework, streamlined observability of system failures, and coordinated with alumni and faculty advisors to prepare our vehicle for global competitions.",
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
		id: 4,
		title: "Application Developer",
		previousTitles: ["Application Developer, Intern"],
		dateStart: "2022",
		dateEnd: "2023",
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
		id: 5,
		title: "Software Intern",
		dateStart: "2019-03",
		dateEnd: "2019-05",
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
		id: 6,
		title: "Swim Instructor",
		dateStart: "2018-05",
		dateEnd: "2018-08",
		company: "City of Mountain View",
		desc: "I taught swimming to children aged 6-16, including those with special needs. I brought energy, patience, and empathy to every lesson, qualities I strive to embody today.",
		link: "https://www.mountainview.gov/our-city/departments/community-services/recreation/aquatics-pools/swim-lessons",
	},
]

export const SELECTED_PROJECTS = [
	"Learning-Based AUV Docking",
	"Informative Path Planning over MNIST Digits",
	"Autonomous Mapping of Unseen Environments",
]

export const PROJECTS = [
  	{
		title: "Terrain-Aware UAV Track & Follow",
		desc: "Deep reinforcement learning framework for learning UAV autonomous search and tracking in procedurally generated GPS-denied forest environments.",
		tags: ["Isaac Gym", "Deep RL", "Vision-Based Navigation"],
		link: "https://github.com/npragin/terrain-track-follow",
		year: "2025",
	},
	{
		title: "AI Club Project Workshop",
		desc: "Comprehensive tutorial series teaching NumPy, Pandas, PyTorch, and scikit-learn through a guided machine learning project.",
		tags: ["Machine Learning", "Python", "Tutorial"],
		link: "https://osu-ai.club/project-workshop",
		year: "2025",
	},
	{
		title: "Franka Research 3 ROS2 Policy Interface",
		desc: "ROS2 package for controlling Franka Emika robots using RL policies.",
		tags: ["ROS2", "Hardware", "Reinforcement Learning", "Point Clouds"],
		link: "https://github.com/npragin/panda_py_pkg",
		year: "2025",
	},
	{
		title: "IoMT MQTT Threat Detection",
		desc: "ML-based identification of malicious connections to Medical IoT devices via MQTT with a focus on addressing dataset-specific challenges.",
		tags: ["Machine Learning", "Cybersecurity", "IoT"],
		link: "https://github.com/npragin/iomt-mqtt-threat-detection",
		year: "2025",
	},
	{
		title: "Pet Breed Classifier",
		desc: "Microservices-based web application for classifying dog and cat breeds using a ConvNeXt-Tiny model.",
		tags: ["Deep Learning", "Flask", "Microservices"],
		link: "https://github.com/npragin/pet-classifier",
		year: "2025",
	},
	{
		title: "Learning-Based AUV Docking",
		desc: "Autonomous underwater vehicle (AUV) docking policies that maintain performance despite unseen, unpredictable dynamics.",
		image: "/learning-based-docking.gif",
		tags: ["Isaac Sim", "Deep RL", "Reward Shaping"],
		link: "https://github.com/npragin/learning-based-docking",
		year: "2025",
	},
	{
		title: "Multi-Person Pose Estimation Study",
		desc: "Comparative analysis of top-down, bottom-up, and end-to-end architectures for human pose estimation.",
		tags: ["Computer Vision", "Deep Learning", "PyTorch"],
		link: "https://github.com/npragin/hpe-mpii-comparative",
		year: "2025",
	},
	{
		title: "Informative Path Planning over MNIST Digits",
		desc: "Combining classical robotics approaches with deep learning to navigate to the correct grid corner by exploring and identifying a hidden handwritten digit.",
		image: "/mnist-exploration-robot.gif",
		squareImage: true,
		tags: ["Motion Planning", "Deep Learning", "Computer Vision"],
		link: "https://github.com/npragin/mnist-exploration-robot",
		year: "2025",
	},
	{
		title: "Character-Level RNN Text Generator",
		desc: "PyTorch implementation of character-level RNN for text generation.",
		tags: ["PyTorch", "NLP"],
		link: "https://github.com/npragin/charnn",
		year: "2025",
	},
	{
		title: "Autonomous Mapping of Unseen Environments",
		desc: "Autonomous mapping system with a two-tier controller architecture for obstacle avoidance and exploration strategy. Independently developed an expanding wavefront frontier detection algorithm, later discovering it aligned with published research by Phillip Quin et al.",
		image: "/unseen-env-mapping.png",
		squareImage: true,
		tags: ["Motion Planning", "Real-Time Systems", "SLAM", "ROS"],
		link: "https://github.com/npragin/unseen-env-mapping",
		year: "2024",
	},
	{
		title: "Interactive Scalar Field Visualization",
		desc: "OpenGL-based scientific visualization tool for exploring 3D scalar field data and comparing color map schemes.",
		tags: ["C++", "OpenGL", "Scientific Visualization"],
		link: "https://github.com/npragin/isfv",
		year: "2024",
	},
	{
		title: "Portfolio Website",
		desc: "The website you're currently on.",
		tags: ["Next.js", "Tailwind CSS", "React"],
		link: "https://github.com/npragin/portfolio",
		year: "2024",
	},
]
