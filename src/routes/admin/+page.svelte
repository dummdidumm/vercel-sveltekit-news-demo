<script lang="ts">
	let isLoading = false;
	let message = '';

	async function refreshData() {
		isLoading = true;
		message = '';

		try {
			const response = await fetch('/api/cms/refresh');

			if (response.ok) {
				message = 'Data refreshed successfully';
			} else {
				throw new Error('Failed to refresh data');
			}
		} catch (error) {
			console.error('Error refreshing data:', error);
			message = 'Failed to refresh data. Please try again.';
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="overflow-hidden rounded-lg border border-[#eaeaea] bg-white">
	<div class="p-6 md:p-8">
		<h1 class="mb-6 text-3xl font-bold md:text-4xl">Admin Dashboard</h1>
		<div class="flex flex-col items-center justify-center space-y-4">
			<button
				on:click={refreshData}
				disabled={isLoading}
				class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
			>
				{isLoading ? 'Refreshing...' : 'Refresh Data'}
			</button>
			{#if message}
				<p class={message.includes('Failed') ? 'text-red-600' : 'text-green-600'}>
					{message}
				</p>
			{/if}
		</div>
	</div>
</div>
