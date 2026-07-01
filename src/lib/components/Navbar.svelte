<script lang="ts">
	import { Search, BookOpen } from '@lucide/svelte';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
</script>

<nav class="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<a href="{base}/" class="flex items-center gap-2 font-bold text-xl text-primary">
			<BookOpen class="h-6 w-6" />
			<span class="hidden sm:inline">База Знаний ЦНИИЭ</span>
			<span class="sm:hidden">БЗ ЦНИИЭ</span>
		</a>

		<div class="flex items-center gap-4">
			<a href="{base}/kb" class="text-sm font-medium hover:text-primary transition-colors"
				>Документы</a
			>
			<div class="relative hidden md:block group">
				<Search
					class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors"
				/>
				<input
					type="search"
					placeholder="Нажмите / для поиска..."
					class="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
					onkeydown={(e) => {
						if (e.key === 'Enter') {
							goto(`${base}/kb?q=${encodeURIComponent(e.currentTarget.value)}`);
						}
					}}
				/>
			</div>
		</div>
	</div>
</nav>
