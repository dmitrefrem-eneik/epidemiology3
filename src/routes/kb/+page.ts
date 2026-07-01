import { getPosts } from '$lib/kb';

export async function load() {
	const posts = await getPosts();
	return { posts };
}
