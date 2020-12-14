import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	routes: [
		{ path: '/', component: '@/pages/index' },
	],
	// 布局插件
	// layout: {},
	// antd
	antd: {},
	// dva数据流
	dva: {
		
	},
	// 使用代理跨域请求
	// proxy: {
	// 	'/api': {
	// 		target: 'https://a.b.com/',
	// 		changeOrigin: true,
	// 		pathRewrite: { '^/api': '' },
	// 	},
	// },
	locale: {
		// default zh-CN
		default: 'zh-CN',
		antd: true,
		// default true, when it is true, will use `navigator.language` overwrite default
		baseNavigator: true,
	},
});

