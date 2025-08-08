'use client';

const HeroSection = () => {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4 z-10">
				<div className="text-center mb-8">
					<span className="text-lg md:text-xl text-gray-700 mb-2 block font-medium">Hi, I&apos;m</span>
					<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
						<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
							Mariam Mohamed
						</span>
					</h1>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-800">Android Developer</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
						Crafting exceptional mobile experiences with
						<span className="text-blue-700 font-medium"> Kotlin</span>, and
						<span className="text-blue-700 font-medium"> Java</span>
					</p>
				</div>

				{/* App Store Stats */}
				<div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
					{[
						{
							label: 'Apps Developed',
							value: '3+',
							icon: (
								<svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
								</svg>
							),
						},
						{
							label: 'Major Features Implemented  (Login, DB, etc.)',
							value: '10+',
							icon: (
								<svg
									className="w-8 h-8 text-purple-600"
									viewBox="0 0 24 24"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									>
									<path d="
										M19.43 12.98
										C19.46 12.66 19.5 12.34 19.5 12
										C19.5 11.66 19.46 11.34 19.43 11.02
										L21.54 9.37
										C21.69 9.25 21.74 9.03 21.64 8.85
										L19.64 5.15
										C19.54 4.97 19.33 4.9 19.15 4.96
										L16.56 6.12
										C16.04 5.72 15.47 5.38 14.84 5.13
										L14.34 2.33
										C14.31 2.14 14.14 2 13.94 2H10.06
										C9.86 2 9.69 2.14 9.66 2.33
										L9.16 5.13
										C8.53 5.38 7.96 5.72 7.44 6.12
										L4.85 4.96
										C4.67 4.9 4.46 4.97 4.36 5.15
										L2.36 8.85
										C2.26 9.03 2.31 9.25 2.46 9.37
										L4.57 11.02
										C4.54 11.34 4.5 11.66 4.5 12
										C4.5 12.34 4.54 12.66 4.57 12.98
										L2.46 14.63
										C2.31 14.75 2.26 14.97 2.36 15.15
										L4.36 18.85
										C4.46 19.03 4.67 19.1 4.85 19.04
										L7.44 17.88
										C7.96 18.28 8.53 18.62 9.16 18.87
										L9.66 21.67
										C9.69 21.86 9.86 22 10.06 22H13.94
										C14.14 22 14.31 21.86 14.34 21.67
										L14.84 18.87
										C15.47 18.62 16.04 18.28 16.56 17.88
										L19.15 19.04
										C19.33 19.1 19.54 19.03 19.64 18.85
										L21.64 15.15
										C21.74 14.97 21.69 14.75 21.54 14.63
										L19.43 12.98Z
										M12 15.5
										C10.07 15.5 8.5 13.93 8.5 12
										C8.5 10.07 10.07 8.5 12 8.5
										C13.93 8.5 15.5 10.07 15.5 12
										C15.5 13.93 13.93 15.5 12 15.5Z
									"/>
									</svg>
							),
						},
						{
							label: 'Kotlin · Java · Room · MVVM · Retrofit · Coroutines · Hilt',
							value: 'Skills',
							icon: (
								<svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
  									<path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"/>
								</svg>
							),
						},
						{
							label: 'Hours Of Development',
							value: '1100+',
							icon: (
								<svg
									className="w-8 h-8 text-green-600"
									viewBox="0 0 24 24"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									>
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
									<line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									<line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
									</svg>	
							),
						},
					].map((stat, index) => (
						<div
							key={index}
							className="group relative bg-gray-100/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
						>
							{/* Decorative gradient background */}
							<div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							{/* Content */}
							<div className="relative z-10">
								<div className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
								<div className="space-y-0.5 sm:space-y-1">
									<div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
										{stat.value}
									</div>
									<div className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
								</div>
							</div>

							{/* Decorative corner accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>

							{/* Hover glow effect */}
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-500"></div>
						</div>
					))}
				</div>

				{/* Featured App Preview */}
				<div className="max-w-lg mx-auto px-4">
					<div className="group relative bg-gradient-to-b from-gray-200 to-gray-100 rounded-2xl p-1 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-500 shadow-lg">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

						<div className="bg-gradient-to-b from-gray-100 to-white rounded-2xl overflow-hidden relative">
							{/* Decorative Pattern */}
							<div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
								<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
										<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
									</pattern>
									<rect width="100" height="100" fill="url(#grid)" />
								</svg>
							</div>

							<div className="relative p-8">
								{/* Badge */}
								<div className="flex justify-center">
									<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
										<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
										<span className="text-blue-700 text-sm font-medium">Featured App</span>
									</div>
								</div>

								{/* App Info */}
								<div className="text-center mt-6">
									<h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
										Rafiq
									</h3>
									<p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors font-medium">Smart Vision Assistant for Everyday Use</p>

									{/* Features Pills */}
									<div className="flex flex-wrap justify-center gap-2">
										{['Android Native', 'User Friendly', 'Real-Time sync'].map((feature, index) => (
											<span
												key={index}
												className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 border border-gray-300 group-hover:border-gray-400 group-hover:text-gray-800 transition-colors font-medium"
											>
												{feature}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Decorative Corner Elements */}
							<div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
								<div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
								<div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
								<div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
								<div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
					<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
