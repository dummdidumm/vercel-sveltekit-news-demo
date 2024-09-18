import type { PageServerLoad } from './$types';
import { biggerTitles } from '$lib/flags';

export const load: PageServerLoad = async () => {
	const dashboard = await biggerTitles();

	return {
		post: {
			title: dashboard ? 'New Dashboard' : `Old Dashboard`
		}
	};
};
