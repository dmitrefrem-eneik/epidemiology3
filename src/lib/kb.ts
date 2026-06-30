import type { Component } from 'svelte';

export interface Post {
	title: string;
	description?: string;
	date: string;
	category: string;
	published: boolean;
	slug: string;
}

export async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/content/**/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function getPost(slug: string) {
	const paths = import.meta.glob('/src/content/**/*.md');

	for (const path in paths) {
		if (path.endsWith(`/${slug}.md`)) {
			const file = await paths[path]() as any;
			return {
				content: file.default as Component,
				meta: file.metadata as Post
			};
		}
	}

	throw new Error(`Could not find post ${slug}`);
}
