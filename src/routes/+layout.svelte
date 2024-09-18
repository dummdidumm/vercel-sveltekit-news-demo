<script>
	import '../app.css';
	import { mountVercelToolbar } from '@vercel/toolbar/vite';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	if (dev) {
		onMount(() => mountVercelToolbar());
	}

	let { children } = $props();
</script>

{@render children()}
