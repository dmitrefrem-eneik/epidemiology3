<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import './layout.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-900">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>

	<footer class="border-t bg-white py-8">
		<div class="container mx-auto px-4 text-center text-sm text-slate-500">
			&copy; 2026 Образовательный центр ФБУН ЦНИИ Эпидемиологии Роспотребнадзора
		</div>
	</footer>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
