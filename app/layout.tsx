import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Mariam Mohamed - Android Developer',
	description:
		'Welcome to my portfolio! I am a passionate mobile developer crafting beautiful and performant apps for Android. Specializing in kotlin development, I create engaging mobile experiences that users love.',
	keywords: [
		'Mobile Developer',
		'Android Developer',
		'Kotlin',
		'Mobile Apps',
		'Mobile UI/UX',
		'Play Store',
		'Mobile Architecture',
		'Mariam Mohamed',
	],
	authors: [{ name: 'Mariam Mohamed' }],
	creator: 'Mariam Mohamed',
	openGraph: {
		title: 'Mariam Mohamed - Android Developer Portfolio',
		description: 'Passionate mobile developer creating exceptional Android applications. Explore my projects and app development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Mariam Mohamed - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Mariam Mohamed - Android Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
