import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export interface Article {
	id: string;
	author: string;
	publishDate: string;
	title: string;
	description: string;
	imageUrl?: string;
	content: string;
}

const articles: Article[] = [
	{
		id: '1',
		author: 'John Doe',
		publishDate: '2024-09-15',
		title: 'The Future of Web Development',
		description: 'Exploring upcoming trends and technologies shaping the web.',
		imageUrl: '/usa.webp',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '.repeat(
				4
			) +
			'<br><br>' +
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '.repeat(
				4
			)
	},
	{
		id: '2',
		author: 'Jane Smith',
		publishDate: '2024-09-16',
		title: 'Mastering SvelteKit',
		description: 'A comprehensive guide to building modern web apps with SvelteKit.',
		content:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '.repeat(
				4
			) +
			'<br><br>' +
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '.repeat(
				4
			)
	},
	{
		id: '3',
		author: 'Alice Johnson',
		publishDate: '2024-09-17',
		title: 'The Rise of AI in Tech',
		description: 'How artificial intelligence is transforming the technology landscape.',
		content:
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '.repeat(
				4
			) +
			'<br><br>' +
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '.repeat(
				4
			)
	},
	{
		id: '4',
		author: 'Bob Brown',
		publishDate: '2024-09-18',
		title: 'Cybersecurity Best Practices',
		description:
			'Essential tips for protecting your digital assets in an increasingly connected world.',
		content:
			'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(
				4
			) +
			'<br><br>' +
			'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '.repeat(
				4
			)
	}
];

export const GET: RequestHandler = async () => {
	// Simulate some delay
	await new Promise((resolve) => setTimeout(resolve, 50));
	return json(articles);
};
