<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children } = $props();
</script>

<div class="container mx-auto px-4 py-8">
	<div class="flex flex-col lg:flex-row gap-8">
		<Sidebar />
		<div class="flex-grow min-w-0">
			{@render children()}
		</div>
	</div>
</div>
