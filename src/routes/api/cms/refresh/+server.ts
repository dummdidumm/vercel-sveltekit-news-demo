import type { RequestHandler } from './$types';

export const _token = 'REFRESH_ARTICLES_BYPASS_TOKENNNN';

// Force ISR revalidation by calling the articles with the corresponding header
export const GET: RequestHandler = async ({ url }) => {
	// Use node's fetch to force going through the edge, else SvelteKit would directly call itself
	await fetch(url.origin + '/article/1', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': _token }
	});
	await fetch(url.origin + '/article/2', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': _token }
	});
	await fetch(url.origin + '/article/3', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': _token }
	});
	await fetch(url.origin + '/article/4', {
		method: 'GET',
		headers: { 'x-prerender-revalidate': _token }
	});

	return new Response('refreshed articles');
};
