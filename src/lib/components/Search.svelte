<script lang="ts">
	import { onMount } from 'svelte';
	import { Search as SearchIcon } from '@lucide/svelte';
	import Fuse from 'fuse.js';
	import type { Post } from '$lib/kb';

	let { posts } = $props<{ posts: Post[] }>();
	let query = $state('');
	let results = $state<Post[]>([]);

	const fuse = $derived(new Fuse(posts, {
		keys: ['title', 'description', 'category'],
		threshold: 0.3
	}));

	$effect(() => {
		if (query.length > 2) {
			results = fuse.search(query).map(r => r.item as Post);
		} else {
			results = [];
		}
	});
</script>

<div class="relative w-full max-w-2xl mx-auto">
	<div class="relative">
		<SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
		<input
			type="text"
			bind:value={query}
			placeholder="Поиск по названию, категории или описанию..."
			class="w-full h-12 pl-11 pr-4 rounded-xl border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
		/>
	</div>

	{#if results.length > 0}
		<div class="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-border max-h-[400px] overflow-y-auto">
			<ul class="p-2 space-y-1">
				{#each results as result}
					<li>
						<a
							href="/kb/{result.slug}"
							class="block p-3 rounded-lg hover:bg-primary/5 transition-colors"
						>
							<div class="font-semibold text-foreground">{result.title}</div>
							{#if result.description}
								<div class="text-sm text-muted-foreground line-clamp-1">{result.description}</div>
							{/if}
							<div class="mt-1 flex gap-2">
								<span class="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-full uppercase font-bold">
									{result.category}
								</span>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{:else if query.length > 2}
		<div class="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-border p-6 text-center text-muted-foreground">
			Ничего не найдено по запросу "{query}"
		</div>
	{/if}
</div>
