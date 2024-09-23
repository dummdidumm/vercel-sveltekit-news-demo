<script>
	import '../app.css';
	import { mountVercelToolbar } from '@vercel/toolbar/vite';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	if (dev) {
		onMount(() => mountVercelToolbar());
	}

	let currentDate = $state('');

	onMount(() => {
		currentDate = new Date().toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Vercel News</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-[#fafafa]">
	<header class="border-b border-[#eaeaea] bg-white">
		<nav class="mx-auto flex max-w-[1024px] items-center justify-between px-6 py-4">
			<div class="flex items-center space-x-6">
				<a href="/" class="text-xl font-semibold">Vercel News</a>
				<a href="/" class="text-sm text-gray-600 hover:text-black">Home</a>
				<a href="/about" class="text-sm text-gray-600 hover:text-black">About</a>
			</div>
			<div class="text-sm text-gray-600">{currentDate}</div>
		</nav>
	</header>

	<main class="mx-auto max-w-[1024px] flex-grow px-6 py-8">
		{@render children()}
	</main>

	<footer class="border-t border-[#eaeaea] bg-white">
		<div class="mx-auto flex max-w-[1024px] items-center justify-between px-6 py-8">
			<div class="text-sm text-gray-600">© 2023 Vercel News. All rights reserved.</div>
			<div class="flex space-x-6">
				<a href="/" class="text-sm text-gray-600 hover:text-black">Privacy Policy</a>
				<a href="/" class="text-sm text-gray-600 hover:text-black">Terms of Service</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
