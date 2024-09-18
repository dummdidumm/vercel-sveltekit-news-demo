import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	// Use node's fetch to force going through the edge, else SvelteKit would directly call itself
	await fetch(url.origin + '/article/1', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': 'REFRESH_ARTICLES_BYPASS_TOKENNNN' }
	});
	await fetch(url.origin + '/article/2', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': 'REFRESH_ARTICLES_BYPASS_TOKENNNN' }
	});
	await fetch(url.origin + '/article/3', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': 'REFRESH_ARTICLES_BYPASS_TOKENNNN' }
	});
	await fetch(url.origin + '/article/4', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': 'REFRESH_ARTICLES_BYPASS_TOKENNNN' }
	});

	return new Response('refreshed articles');
};
