import HomePageButton from "../helper-components/HomePageButton";

const Home = () => {
	return (
		<section
			className="min-h-dvh flex items-center justify-center relative"
			id="home"
		>
			<div className="text-center z-10 px-4">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent leading-right">
					Hi, my name is Daniel Hurník
				</h1>
				<p className={"text-gray-300 text-lg max-w-4xl mx-auto mb-8"}>
					I'm a front end developer with a passion for creating beautiful and functional web applications. I specialize in React,
					TypeScript, and modern web technologies to build responsive and user-friendly interfaces. Delivering high-quality code
					and a seamless user experience is my top priority. Let's work together to bring your ideas to life!
				</p>

				<div className="flex justify-center items-center space-x-4">
					<HomePageButton
						location="about"
						text="About Me"
						className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
					/>
					<HomePageButton
						location="projects"
						text="My Projects"
						className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
