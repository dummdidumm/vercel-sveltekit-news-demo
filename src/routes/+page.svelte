<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-4xl font-bold mb-8">Top Stories</h1>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<article class="border border-[#eaeaea] rounded-lg overflow-hidden bg-white">
		<img
			src={data.featuredArticle.imageUrl || '/placeholder.jpg'}
			alt={data.featuredArticle.title}
			class="w-full h-48 object-cover"
		/>
		<div class="p-6">
			<h2 class="{data.bigger ? 'text-3xl' : 'text-xl'} font-semibold mb-2">
				{data.featuredArticle.title}
			</h2>
			<p class="text-gray-600 mb-4">{data.featuredArticle.description}</p>
			<a href={`/article/${data.featuredArticle.id}`} class="text-blue-600 hover:underline"
				>Read More →</a
			>
		</div>
	</article>
	<div class="space-y-6">
		{#each data.otherArticles as article}
			<article class="border border-[#eaeaea] rounded-lg overflow-hidden bg-white p-6">
				<h2 class="{data.bigger ? 'text-3xl' : 'text-xl'} font-semibold mb-2">
					{article.title}
				</h2>
				<p class="text-gray-600 mb-4">{article.description}</p>
				<a href={`/article/${article.id}`} class="text-blue-600 hover:underline">Read More →</a>
			</article>
		{/each}
	</div>
</div>
