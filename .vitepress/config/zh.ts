// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const zh = defineConfig({
	lang: 'zh-Hans',
	title: 'Skins77饰品开放平台',
	description: '由Skins77饰品开放平台提供',

	themeConfig: {
		nav: nav(),

		sidebar: {
			'/guide/': { base: '/guide/', items: sidebarGuide() },
		},

		// editLink: {
		// 	pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
		// 	text: '在 GitHub 上编辑此页面'
		// },

		footer: {
			message: '基于 MIT 许可发布',
			copyright: `版权所有 © 2024-${new Date().getFullYear()} Skins77`
		},

		docFooter: {
			prev: '上一页',
			next: '下一页'
		},

		outline: {
			label: '页面导航'
		},

		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium'
			}
		},

		langMenuLabel: '多语言',
		returnToTopLabel: '回到顶部',
		sidebarMenuLabel: '菜单',
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式'
	}
})

function nav() : DefaultTheme.NavItem[] {
	return [
		{
			text: '指南',
			link: '/guide/base-information',
			activeMatch: '/guide/'
		},
		// {
		// 	text: '参考',
		// 	link: '/zh/reference/site-config',
		// 	activeMatch: '/zh/reference/'
		// },
		{
			text: '商户中心',
			link: 'https://merchant.skins77.com',
		},
		// {
		// 	text: pkg.version,
		// 	items: [
		// 		{
		// 			text: '更新日志',
		// 			link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
		// 		},
		// 		{
		// 			text: '参与贡献',
		// 			link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
		// 		}
		// 	]
		// }
	]
}

function sidebarGuide() : DefaultTheme.SidebarItem[] {
	return [
		{
			text: '主要',
			collapsed: false,
			items: [
				{ text: '基本信息', link: 'base-information' },
				// { text: '生成签名', link: 'getting-started' },
				// { text: '更新记录', link: 'update-record' },
			]
		},
		{
			text: '用户相关',
			collapsed: false,
			items: [
				{ text: '用户余额', link: 'merchant-info' },
			]
		},
		{
			text: '饰品相关',
			collapsed: false,
			items: [
				{ text: '饰品筛选', link: 'product-search' },
				{ text: '价格列表（有库存的皮肤）', link: 'product-list' },
			]
		},
		{
			text: '订单相关',
			collapsed: false,
			items: [
				{ text: '购买饰品', link: 'trade-buy' },
				{ text: '根据品类购买', link: 'product-buy' },
				{ text: '订单信息', link: 'order-info' },
				{ text: '取消订单', link: 'cancel-order' }
			]
		},
	]
}

export const search : DefaultTheme.AlgoliaSearchOptions['locales'] = {
	zh: {
		placeholder: '搜索文档',
		translations: {
			button: {
				buttonText: '搜索文档',
				buttonAriaLabel: '搜索文档'
			},
			modal: {
				searchBox: {
					resetButtonTitle: '清除查询条件',
					resetButtonAriaLabel: '清除查询条件',
					cancelButtonText: '取消',
					cancelButtonAriaLabel: '取消'
				},
				startScreen: {
					recentSearchesTitle: '搜索历史',
					noRecentSearchesText: '没有搜索历史',
					saveRecentSearchButtonTitle: '保存至搜索历史',
					removeRecentSearchButtonTitle: '从搜索历史中移除',
					favoriteSearchesTitle: '收藏',
					removeFavoriteSearchButtonTitle: '从收藏中移除'
				},
				errorScreen: {
					titleText: '无法获取结果',
					helpText: '你可能需要检查你的网络连接'
				},
				footer: {
					selectText: '选择',
					navigateText: '切换',
					closeText: '关闭',
					searchByText: '搜索提供者'
				},
				noResultsScreen: {
					noResultsText: '无法找到相关结果',
					suggestedQueryText: '你可以尝试查询',
					reportMissingResultsText: '你认为该查询应该有结果？',
					reportMissingResultsLinkText: '点击反馈'
				}
			}
		}
	}
}