import type { PageServerLoad } from './$types';
import type { Article } from '../../api/cms/articles/+server';

export const config = {
	isr: {
		expiration: 180,
		bypassToken: 'REFRESH_ARTICLES_BYPASS_TOKENNNN'
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
