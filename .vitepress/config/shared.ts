import {
	defineConfig
} from 'vitepress'
import {
	search as zhSearch
} from './zh'

export const shared = defineConfig({
	base: '/',
	//顶部左侧标题
	title: 'Skins77',

	//路由映射模式
	rewrites: {
		// 'en/:rest*': ':rest*'
		'zh/:rest*': ':rest*'
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
		hostname: '',
		transformItems(items) {
			return items.filter((item) => !item.url.includes('migration'))
		}
	},

	/* prettier-ignore */
	head: [
		//favicon.ico
		['link', {
			rel: 'icon',
			type: 'image/png',
			href: '/logo.png'
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
			content: ''
		}],
		['meta', {
			property: 'og:site_name',
			content: ''
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
			src: '/logo.png',
			width: 24,
			height: 24
		},

		//扩展链接，可以跳转到站内/站外
		// socialLinks: [{
		// 	icon: 'github',
		// 	link: 'https://github.com/vuejs/vitepress'
		// }],

		// 基于algolia，需要注册替换https://dashboard.algolia.com/dashboard/
		search: {
			provider: 'local',	//本地模式
			// provider: 'algolia',
			options: {
				// appId: '8J64VVRP8K',
				// apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
				// indexName: 'vitepress',
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