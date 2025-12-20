const Footer = () => {
	return (
		<footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
			<p>
				Inspired by&nbsp;
				<a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Brittany Chiang</a>
				&nbsp;and coded in&nbsp;
				<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Visual Studio Code</a>
				&nbsp;by yours truly.
				Built with&nbsp;
				<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="footer-link">Next.js</a>
				&nbsp;and&nbsp;
				<a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Tailwind CSS</a>
				, deployed with&nbsp;
				<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Vercel</a>.
				Thank you for visiting my website,&nbsp;
				<span className="peace-cursor-emoji group inline-block">
					<span className="link-transition duration-300 border-b border-violet-500">Peace</span>
				</span>
				&nbsp;and&nbsp;
				<span className="love-cursor-emoji group inline-block">
					<span className="link-transition border-b border-violet-500">Love</span>
				</span>.
			</p>
		</footer>
	)
}

export default Footer
