import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

const blog = defineCollection({
	// 콘텐츠는 순수 Markdown만 사용한다 (다른 생성기로 옮길 수 있게 유지).
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// Learn / Build / Think 중에서만 선택 가능. 오타가 있으면 빌드가 실패한다.
		categories: z.array(z.enum(CATEGORIES)).min(1),
		tags: z.array(z.string()).default([]),
		// true인 글은 개발 서버에서만 보이고, 프로덕션 빌드에서는 제외된다.
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
