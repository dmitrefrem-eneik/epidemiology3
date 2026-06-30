import { getPosts } from '$lib/kb';

export async function load({ url }) {
	const category = url.searchParams.get('category');
	const query = url.searchParams.get('q');
	let posts = await getPosts();

	if (category) {
		posts = posts.filter(p => p.category === category);
	}

	if (query) {
		const lowerQuery = query.toLowerCase();
		posts = posts.filter(p =>
			p.title.toLowerCase().includes(lowerQuery) ||
			p.description?.toLowerCase().includes(lowerQuery)
		);
	}

	return { posts, category, query };
}
