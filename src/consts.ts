// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'RARA Blog';
export const SITE_DESCRIPTION =
	'오랫동안 소프트웨어를 개발하고 시스템을 설계해 온 엔지니어가 Cloud, Data, AI 시대를 만나 다시 배우고 직접 만드는 이야기.';

export const CATEGORIES = ['Learn', 'Build', 'Think'] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
	Learn: '지금 공부하며 이해해 가는 기술. 왜 만들어졌고, 어떤 문제를 풀고, 어디에 놓이는가.',
	Build: '직접 설계하고 구현하고 실패한 기록. 어떤 결정을 왜 그렇게 했는가.',
	Think: '경험에서 나온 엔지니어링 관찰과 생각.',
};
