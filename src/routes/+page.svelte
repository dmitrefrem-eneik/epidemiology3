<script lang="ts">
	import Search from '$lib/components/Search.svelte';
	import {
		ShieldCheck,
		GraduationCap,
		ClipboardCheck,
		Wallet
	} from '@lucide/svelte';

	let { data } = $props();

	const features = [
		{
			title: 'Нормативная база',
			desc: 'ФГОС, приказы Минобрнауки, Роспотребнадзора и локальные акты.',
			icon: ShieldCheck,
			color: 'text-blue-600',
			bg: 'bg-blue-100',
			href: '/kb?category=normative'
		},
		{
			title: 'Учебно-методические материалы',
			desc: 'Рабочие программы, ФОСы, методические рекомендации и планы занятий.',
			icon: GraduationCap,
			color: 'text-emerald-600',
			bg: 'bg-emerald-100',
			href: '/kb?category=academic'
		},
		{
			title: 'Практика и ГИА',
			desc: 'Инструкции, шаблоны отчетов, вопросы к экзаменам и критерии оценивания.',
			icon: ClipboardCheck,
			color: 'text-purple-600',
			bg: 'bg-purple-100',
			href: '/kb?category=practice'
		},
		{
			title: 'Финансы и стипендии',
			desc: 'Положения о выплатах, расчеты нагрузки и формы отчетности.',
			icon: Wallet,
			color: 'text-amber-600',
			bg: 'bg-amber-100',
			href: '/kb?category=stipends'
		}
	];
</script>

<div class="relative overflow-hidden bg-white py-16 sm:py-24">
	<div class="container mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
				База Знаний <span class="text-primary">ЦНИИ Эпидемиологии</span>
			</h1>
			<p class="text-lg text-slate-600 mb-10">
				Централизованное хранилище документов, регламентов и методических материалов для ординаторов, аспирантов и преподавателей.
			</p>

			<Search posts={data.posts} />
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
			{#each features as feature}
				{@const Icon = feature.icon}
				<a
					href={feature.href}
					class="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col items-start"
				>
					<div class="{feature.bg} {feature.color} p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
						<Icon class="h-6 w-6" />
					</div>
					<h3 class="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
					<p class="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
				</a>
			{/each}
		</div>
	</div>
</div>

<section class="bg-slate-50 py-16 border-t border-slate-200">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row items-center justify-between gap-12">
			<div class="max-w-xl">
				<h2 class="text-3xl font-bold mb-4">Актуальность и достоверность</h2>
				<p class="text-slate-600 mb-6">
					Все документы в базе проходят регулярную проверку. При обновлении законодательства или локальных актов, новые версии публикуются незамедлительно, а старые отправляются в архив.
				</p>
				<ul class="space-y-3">
					<li class="flex items-center gap-3 text-sm font-medium">
						<div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
						Ежеквартальная актуализация контента
					</li>
					<li class="flex items-center gap-3 text-sm font-medium">
						<div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
						Уведомления об изменениях в Telegram
					</li>
					<li class="flex items-center gap-3 text-sm font-medium">
						<div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
						Единые формы и шаблоны документов
					</li>
				</ul>
			</div>
			<div class="bg-white p-8 rounded-2xl border shadow-sm w-full max-w-md">
				<h3 class="text-xl font-bold mb-4">Нужна помощь?</h3>
				<p class="text-sm text-slate-500 mb-6">
					Если вы не нашли нужный документ или заметили ошибку в текущем, пожалуйста, свяжитесь с ответственным лицом или используйте форму обратной связи.
				</p>
				<a href="mailto:edu@crie.ru" class="block w-full py-3 bg-slate-900 text-white rounded-lg font-bold text-center hover:bg-slate-800 transition-colors">
					Написать в учебный отдел
				</a>
			</div>
		</div>
	</div>
</section>
