import { flag } from '@vercel/flags/sveltekit';

export const biggerTitles = flag<boolean>({
	key: 'biggerTitles',
	description: 'The teaser titles are bigger', // optional
	options: [{ value: true }, { value: false }], // optional
	// can be async and has access to the event
	decide(_event) {
		return false;
	}
});
