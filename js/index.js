const App = new Vue({
	el: "#app",
	methods: {
		search() {
			switch (this.searchEngine) {
				case "Google":
					this.window.location.href = "https://www.google.com/search?q=" + this.keyWord
					break
				case "Baidu":
					this.window.location.href = "https://www.baidu.com/s?wd=" + this.keyWord
					break
			}
		},
		blur() {
			setTimeout(() => {
				this.isShow = false
			},
				100)
		},
		select(e) {
			this.keyWord = e
		}
	},
	computed: {
		searchPach() {
			return this.searchEngine + " search..."
		}
	},
	data() {
		return {
			"window": window,
			"keyWord": null,
			"suggestion": null,
			"autoSuggest": false,
			"isShow": false,
			"searchEngine": "Baidu",
			"hearder": {
				"title": "猫猫的一个导航啦",

			},
			"footer": {
				"content": ""
			},
			list: [
				{
					"title": "工具",
					"id": "tool",
					"describtion": "一堆没用的工具导航",
					"urls": [
						{
							"name": "Github",
							"content": "github",
							"url": "https://github.com/"
						},
						{
							"name": "SpiderTools",
							"content": "爬虫集合工具网站",
							"url": "http://www.spidertools.cn/#/"
						}
					]
				},
				{
					"title": "小工具",
					"id": "self",
					"describtion": "自己的一些小工具",
					"urls": [
						{
							"name": "个人博客",
							"content": "by Hexo",
							"url": "http://www.mineseb.cn/"
						},
						{
							"name": "逆向杂谈",
							"content": "hello Codecat 一个分享乱七八糟逆向知识的网站",
							"url": "http://www.mineseb.cn/"
						},
						{
							"name": "青龙面板",
							"content": "",
							"url": "http://jd.codecat.tk/",
						},
						{
							"name": "GitLab",
							"content": "github私服",
							"url": "https://git.mineseb.cn/",
						},
						{
							"name": "kvStorage",
							"content": "一个在线键值对存储云空间",
							"url": "https://kvstorage.codecat.tk/"
						}
					]
				},
				{
					"title": "逆向",
					"id": "逆向",
					"describtion": "JS | 安卓 | ios",
					"urls": [
						{
							"name": "Godbolt",
							"content": "在线汇编自学网站",
							"url": "https://godbolt.org/"
						},
						{
							"name": "编程喵",
							"content": "编程喵js逆向教程 b站资源",
							"url": "https://www.bilibili.com/video/BV1Kh411r7uR?p=12&spm_id_from=333.880.my_history.page.click"
						},

						{
							"name": "猿人学",
							"content": "js刷题网站",
							"url": "https://match.yuanrenxue.com/"
						},
						{
							"name": "吾爱论坛",
							"content": "",
							"url": "https://www.52pojie.cn/"
						},
						{
							"name": "看雪论坛",
							"content": "",
							"url": "https://bbs.pediy.com/"
						},
						{
							"name": "精益论坛",
							"content": "",
							"url": "https://bbs.125.la/"
						}
						,
						{
							"name": "Compiler Explorer",
							"content": "一个在线自学汇编的网站",
							"url": "https://godbolt.org/"
						}

					]
				}

				// 这是一个添加样例
				// {
				// 	"title":"Demo",
				// 	"id":"demo",
				// 	"describtion":"demo",
				// 	"urls":[
				// 		{
				// 			"name":"Demo",
				// 			"content":"demo",
				// 			"url":""
				// 		}
				// 	]
				// }
			]
		}
	},

})
//智能提醒
App.$watch('keyWord', {
	handler(b) {
		if (this.autoSuggest == false) {
			return
		}
		switch (this.searchEngine) {
			case "Google":
				var url = 'https://www.google.com/search?q=' + this.keyWord + '&jsonp=window.google.ac.h'
				console.log(url)
				axios.get(url)
					.then(res => {
						var data = res.data
						data = data.replace('window.google.ac.h(', '').replace(')', '')
						l = data.indexOf('[')
						j = data.lastIndexOf(']')
						data = data.substring(l, j) + ']'

						data = JSON.parse(data)[1]
						console.log(data)
						this.suggestion = []
						for (var i in data) {

							this.suggestion.push(data[i][0])
						}
					})
				break
			case "Baidu":
				var url = 'http://suggestion.baidu.com/su?wd=' + this.keyWord + '&cb=window.baidu.sug'
				console.log(url)
				axios.get(url, {
					headers: {
						'Access-Control-Allow-Credentials': true
					}
				})
					.then(res => {
						let data = res.data
						l = data.indexOf('[')
						j = data.indexOf(']')
						data = data.substring(l, j) + ']'
						data = JSON.parse(data)
						this.suggestion = data
					})
				break
		}
	}
})