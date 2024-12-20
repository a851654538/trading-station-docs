import {
	defineConfig
} from 'vitepress'
import {
	search as zhSearch
} from './zh'

export const shared = defineConfig({
	base: '/trading-station-docs/',
	//顶部左侧标题
	title: 'trading-station-docs',

	//路由映射模式
	rewrites: {
		'en/:rest*': ':rest*'
	},

	lastUpdated: true,
	cleanUrls: true, //是否删除.html
	metaChunk: true,

	markdown: {
		math: true,
		codeTransformers: [
			// We use `[!!code` in demo to prevent transformation, here we revert it back.
			{
				postprocess(code) {
					return code.replace(/\[\!\!code/g, '[!code')
				}
			}
		]
	},

	sitemap: {
		// hostname: 'https://vitepress.dev',
		hostname: 'https://baidu.com',
		transformItems(items) {
			return items.filter((item) => !item.url.includes('migration'))
		}
	},

	/* prettier-ignore */
	head: [
		//favicon.ico
		['link', {
			rel: 'icon',
			type: 'image/svg+xml',
			href: '/trading-station-docs/vitepress-logo-mini.svg'
		}],
		//favicon.ico
		['link', {
			rel: 'icon',
			type: 'image/png',
			href: '/trading-station-docs/vitepress-logo-mini.png'
		}],
		['meta', {
			name: 'theme-color',
			content: '#5f67ee'
		}],
		['meta', {
			property: 'og:type',
			content: 'website'
		}],
		['meta', {
			property: 'og:locale',
			content: 'en'
		}],
		['meta', {
			property: 'og:title',
			content: '11Trading Station Docs | Vite & Vue Powered Static Site Generator'
		}],
		['meta', {
			property: 'og:site_name',
			content: '22Trading Station Docs'
		}],
		// ['meta', {
		// 	property: 'og:image',
		// 	content: 'https://vitepress.dev/vitepress-og.jpg'
		// }],
		// ['meta', {
		// 	property: 'og:url',
		// 	content: 'https://vitepress.dev/'
		// }],
		['script', {
			src: 'https://cdn.usefathom.com/script.js',
			'data-site': 'AZBRSFGG',
			'data-spa': 'auto',
			defer: ''
		}]
	],

	themeConfig: {
		//顶部标题左侧的logo
		logo: {
			src: '/vitepress-logo-mini.svg',
			width: 24,
			height: 24
		},

		//扩展链接，可以跳转到站内/站外
		socialLinks: [{
			icon: 'github',
			link: 'https://github.com/vuejs/vitepress'
		}],

		// 基于algolia，需要注册替换https://dashboard.algolia.com/dashboard/
		search: {
			// provider: 'local',	//本地模式
			provider: 'algolia',
			options: {
				appId: '8J64VVRP8K',
				apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
				indexName: 'vitepress',
				locales: {
					...zhSearch,
				}
			}
		},

		//不接入广告
		// carbonAds: {
		// 	code: 'CEBDT27Y',
		// 	placement: 'vuejsorg'
		// }
	}
})