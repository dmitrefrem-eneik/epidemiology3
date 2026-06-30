<script lang="ts">
	import { Calendar, Tag, ChevronRight } from '@lucide/svelte';
	let { data } = $props();
	const Content = $derived(data.content);
	const meta = $derived(data.meta);

	const categoryNames: Record<string, string> = {
		normative: 'Нормативная база',
		academic: 'Учебно-методические материалы',
		practice: 'Практика и отчетность',
		stipends: 'Стипендии и финансы',
		archive: 'Архив документов'
	};
</script>

<svelte:head>
	<title>{meta.title} | База Знаний ЦНИИЭ</title>
</svelte:head>

<nav class="flex mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
	<ol class="inline-flex items-center space-x-1 md:space-x-3">
		<li class="inline-flex items-center">
			<a href="/kb" class="hover:text-primary transition-colors">База знаний</a>
		</li>
		<li>
			<div class="flex items-center">
				<ChevronRight class="h-4 w-4 mx-1" />
				<a href="/kb?category={meta.category}" class="hover:text-primary transition-colors">
					{categoryNames[meta.category] || meta.category}
				</a>
			</div>
		</li>
	</ol>
</nav>

<article class="bg-white p-8 rounded-2xl border shadow-sm">
	<header class="mb-10 border-b pb-8">
		<h1 class="text-3xl font-extrabold text-slate-900 mb-4">{meta.title}</h1>

		<div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
			<div class="flex items-center gap-1.5">
				<Calendar class="h-4 w-4" />
				<time datetime={meta.date}>{new Date(meta.date).toLocaleDateString('ru-RU')}</time>
			</div>
			<div class="flex items-center gap-1.5">
				<Tag class="h-4 w-4" />
				<span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold uppercase text-[10px]">
					{meta.category}
				</span>
			</div>
		</div>
	</header>

	<div class="prose prose-slate max-w-none
		prose-headings:text-slate-900 prose-headings:font-bold
		prose-p:text-slate-600 prose-p:leading-relaxed
		prose-a:text-primary prose-a:no-underline hover:prose-a:underline
		prose-strong:text-slate-900">
		<Content />
	</div>
</article>
