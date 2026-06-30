<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import {
		FileText,
		GraduationCap,
		Briefcase,
		Coins,
		Archive,
		LayoutDashboard
	} from '@lucide/svelte';

	const menuItems = [
		{ name: 'Все документы', href: '/kb', icon: LayoutDashboard },
		{ name: 'Нормативная база', href: '/kb?category=normative', icon: FileText },
		{ name: 'Учебно-методические', href: '/kb?category=academic', icon: GraduationCap },
		{ name: 'Практика и отчетность', href: '/kb?category=practice', icon: Briefcase },
		{ name: 'Стипендии', href: '/kb?category=stipends', icon: Coins },
		{ name: 'Архив', href: '/kb?category=archive', icon: Archive },
	];
</script>

<aside class="w-64 flex-shrink-0 hidden lg:block">
	<div class="sticky top-20 space-y-4">
		<div class="px-3 py-2">
			<h2 class="mb-2 px-4 text-lg font-semibold tracking-tight text-foreground/70">
				Разделы
			</h2>
			<div class="space-y-1">
				{#each menuItems as item}
					{@const Icon = item.icon}
					<a
						href={item.href}
						class={cn(
							"group flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all",
							page.url.pathname + page.url.search === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
						)}
					>
						<Icon class="mr-3 h-4 w-4" />
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</aside>
