<script>
	import { onMount } from 'svelte';

	let currentDate = '';

	onMount(() => {
		currentDate = new Date().toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	});
</script>

<svelte:head>
	<title>Vercel News</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen bg-[#fafafa] flex flex-col">
	<header class="border-b border-[#eaeaea] bg-white">
		<nav class="max-w-[1024px] mx-auto px-6 py-4 flex justify-between items-center">
			<div class="flex items-center space-x-6">
				<a href="/" class="font-semibold text-xl">Vercel News</a>
				<a href="/" class="text-sm text-gray-600 hover:text-black">Home</a>
				<a href="/about" class="text-sm text-gray-600 hover:text-black">About</a>
			</div>
			<div class="text-sm text-gray-600">{currentDate}</div>
		</nav>
	</header>

	<main class="flex-grow max-w-[1024px] mx-auto px-6 py-8">
		<h1 class="text-4xl font-bold mb-8">Top Stories</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<article class="border border-[#eaeaea] rounded-lg overflow-hidden bg-white">
				<img src="usa.webp" alt="Featured Article" class="w-full h-48 object-cover" />
				<div class="p-6">
					<h2 class="text-xl font-semibold mb-2">Featured Article Title</h2>
					<p class="text-gray-600 mb-4">
						This is a brief description of the featured article. It provides a summary of the
						content.
					</p>
					<a href="/article" class="text-blue-600 hover:underline">Read More →</a>
				</div>
			</article>
			<div class="space-y-6">
				{#each Array(3) as _, i}
					<article class="border border-[#eaeaea] rounded-lg overflow-hidden bg-white p-6">
						<h2 class="text-xl font-semibold mb-2">Article Title {i + 1}</h2>
						<p class="text-gray-600 mb-4">
							This is a brief description of the article. It provides a summary of the content.
						</p>
						<a href="/article" class="text-blue-600 hover:underline">Read More →</a>
					</article>
				{/each}
			</div>
		</div>
	</main>

	<footer class="border-t border-[#eaeaea] bg-white">
		<div class="max-w-[1024px] mx-auto px-6 py-8 flex justify-between items-center">
			<div class="text-sm text-gray-600">© 2023 Vercel News. All rights reserved.</div>
			<div class="flex space-x-6">
				<a href="/privacy" class="text-sm text-gray-600 hover:text-black">Privacy Policy</a>
				<a href="/terms" class="text-sm text-gray-600 hover:text-black">Terms of Service</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
