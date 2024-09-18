import type { PageServerLoad } from './$types';
import { biggerTitles } from '$lib/flags';
import type { Article } from './api/cms/articles/+server';

export const load: PageServerLoad = async ({ fetch }) => {
	const [bigger, articles] = await Promise.all([
		biggerTitles(),
		fetch('/api/cms/articles').then((response) => response.json() as Promise<Article[]>)
	]);
	const featuredArticle = articles[0];
	const otherArticles = articles.slice(1, 4);

	return {
		bigger,
		featuredArticle,
		otherArticles
	};
};
