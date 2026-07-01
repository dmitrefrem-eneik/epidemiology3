<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { FileText, ChevronRight, Calendar } from '@lucide/svelte';
	let { data } = $props();

	const category = $derived(browser ? page.url.searchParams.get('category') : null);
	const query = $derived(browser ? page.url.searchParams.get('q') : null);

	const categoryNames: Record<string, string> = {
		normative: 'Нормативная база',
		academic: 'Учебно-методические материалы',
		practice: 'Практика и отчетность',
		stipends: 'Стипендии и финансы',
		archive: 'Архив документов'
	};

	const filteredPosts = $derived(data.posts.filter(p => {
		const matchesCategory = !category || p.category === category;
		const matchesQuery = !query ||
			p.title.toLowerCase().includes(query.toLowerCase()) ||
			p.description?.toLowerCase().includes(query.toLowerCase());
		return matchesCategory && matchesQuery;
	}));
</script>

<div class="mb-8">
	<h1 class="text-3xl font-bold text-slate-900 mb-2">
		{#if query}
			Результаты поиска: "{query}"
		{:else}
			{category ? categoryNames[category] || category : 'Все документы'}
		{/if}
	</h1>
	<p class="text-slate-500">
		Найдено {filteredPosts.length} документов
	</p>
</div>

<div class="grid grid-cols-1 gap-4">
	{#each filteredPosts as post}
		<a
			href="{base}/kb/{post.slug}"
			class="group p-5 bg-white rounded-xl border shadow-sm hover:border-primary/50 hover:shadow-md transition-all flex items-center justify-between"
		>
			<div class="flex items-center gap-4">
				<div class="p-3 bg-slate-100 text-slate-500 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
					<FileText class="h-6 w-6" />
				</div>
				<div>
					<h3 class="font-bold text-slate-900 group-hover:text-primary transition-colors">{post.title}</h3>
					<div class="flex items-center gap-3 mt-1 text-sm text-slate-500">
						<span class="flex items-center gap-1">
							<Calendar class="h-3.5 w-3.5" />
							{new Date(post.date).toLocaleDateString('ru-RU')}
						</span>
						<span class="bg-slate-100 px-2 py-0.5 rounded uppercase text-[10px] font-bold">
							{post.category}
						</span>
					</div>
				</div>
			</div>
			<ChevronRight class="h-5 w-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
		</a>
	{:else}
		<div class="py-12 text-center bg-white rounded-xl border border-dashed">
			<FileText class="h-12 w-12 text-slate-300 mx-auto mb-4" />
			<p class="text-slate-500 font-medium">В данном разделе пока нет документов</p>
		</div>
	{/each}
</div>
