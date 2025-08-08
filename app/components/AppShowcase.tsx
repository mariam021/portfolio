'use client';

interface App {
	id: number;
	name: string;
	description: string;
	technologies: string[];
}

const apps: App[] = [
	{
		id: 1,
		name: 'Shopverse',
		description: 'A modern Android app for browsing, searching, and managing products with a smooth and intuitive user experience.',
		technologies: ['Android', 'User-friendly', 'Offline Support']
	},
	{
		id: 2,
		name: 'Notes',
		description: 'A lightweight and intuitive Android application designed to help users efficiently capture, organize, and manage their thoughts, to-dos, and reminders.',
		technologies: ['Java', 'Offline']
	}
];

const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<div key={app.id} className="group bg-gradient-to-b from-gray-100 to-white rounded-xl sm:rounded-2xl p-1 shadow-lg">
							<div className="bg-gradient-to-b from-white to-gray-50 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
									{/* App Icon */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
										<div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden relative">
											{app.id === 1 ? (
												<svg
													className="w-10 h-10 text-blue-600"
													viewBox="0 0 24 24"
													fill="currentColor"
													xmlns="http://www.w3.org/2000/svg"
													>
													<path d="
														M6 2
														C5.44772 2 5 2.44772 5 3
														V5
														H4
														C3.44772 5 3 5.44772 3 6
														V20
														C3 21.1046 3.89543 22 5 22
														H19
														C20.1046 22 21 21.1046 21 20
														V6
														C21 5.44772 20.5523 5 20 5
														H19
														V3
														C19 2.44772 18.5523 2 18 2
														H17
														C16.4477 2 16 2.44772 16 3
														V5
														H8
														V3
														C8 2.44772 7.55228 2 7 2
														H6
														Z
														M8 7
														H16
														V9
														C16 10.6569 14.6569 12 13 12
														H11
														C9.34315 12 8 10.6569 8 9
														V7
														Z
													" />
													</svg>
											) : (
												<svg
													className="w-10 h-10 text-purple-600"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
													xmlns="http://www.w3.org/2000/svg"
													>
													<path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
													<path d="M9 8h6" />
													<path d="M9 12h6" />
													<path d="M9 16h4" />
													</svg>
											)}
											{/* Animated Glow Effect */}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
										</div>
										{/* Corner Decorations */}
										<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full blur-[2px]"></div>
										<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full blur-[2px]"></div>
									</div>

									{/* App Info */}
									<div className="flex-grow w-full sm:w-auto">
										<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
											<h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-center sm:text-left break-words">
												{app.name}
											</h3>
										</div>
										<p className="text-gray-600 mb-4 text-center sm:text-left">{app.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
											{app.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 border border-gray-200 group-hover:border-gray-300 group-hover:text-gray-700 transition-colors whitespace-nowrap"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;