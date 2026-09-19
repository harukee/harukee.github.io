// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 사용자 사이트(저장소 이름이 harukee.github.io)라서 base 경로는 필요 없다.
	// 커스텀 도메인을 연결하면 이 값을 그 도메인으로 바꾼다.
	site: 'https://harukee.github.io',
	integrations: [sitemap()],
	markdown: {
		// mermaid 블록은 Shiki가 토큰 단위 <span>으로 쪼개지 않도록 제외한다.
		// 브라우저에서 src/components/Mermaid.astro가 다이어그램으로 렌더링한다.
		syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] },
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
