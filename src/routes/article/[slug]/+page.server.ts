import type { PageServerLoad } from './$types';
import type { Article } from '../../api/cms/articles/+server';
import { _token } from '../../api/cms/refresh/+server';

export const config = {
	isr: {
		expiration: 180,
		bypassToken: _token
	}
};

export const load: PageServerLoad = async ({ fetch, params }) => {
	const articles = await fetch('/api/cms/articles').then(
		(response) => response.json() as Promise<Article[]>
	);

	return {
		article: articles.find((article) => article.id === params.slug)!
	};
};
