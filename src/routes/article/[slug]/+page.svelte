<script>
	let { data } = $props();
</script>

<article class="bg-white border border-[#eaeaea] rounded-lg overflow-hidden">
	{#if data.article.imageUrl}
		<img src={data.article.imageUrl} alt={data.article.title} class="w-full h-64 object-cover" />
	{/if}
	<div class="p-6 md:p-8">
		<h1 class="text-3xl md:text-4xl font-bold mb-4">{data.article.title}</h1>
		<div class="flex items-center text-sm text-gray-600 mb-6">
			<span>{data.article.author}</span>
			<span class="mx-2">•</span>
			<time datetime={data.article.publishDate}
				>{new Date(data.article.publishDate).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</time
			>
		</div>
		<p class="text-xl text-gray-600 mb-6">{data.article.description}</p>
		<div class="prose max-w-none">
			{@html data.article.content}
		</div>
	</div>
</article>
