import { getCollection, type CollectionEntry } from 'astro:content';
import type { Category } from '../consts';

export type Post = CollectionEntry<'blog'>;

// 프로덕션 빌드에서는 draft를 제외하고, 개발 서버에서는 초안도 보여 준다.
export async function getPosts(category?: Category): Promise<Post[]> {
	const posts = await getCollection(
		'blog',
		({ data }) =>
			(import.meta.env.DEV || !data.draft) && (!category || data.categories.includes(category)),
	);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
