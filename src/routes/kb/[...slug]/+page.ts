import { getPost } from '$lib/kb';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const slug = params.slug.split('/').at(-1) || '';
		const post = await getPost(slug);
		return {
			content: post.content,
			meta: post.meta
		};
	} catch (e) {
		error(404, `Документ "${params.slug}" не найден`);
	}
}
