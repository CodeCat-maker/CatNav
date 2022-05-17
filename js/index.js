const App = new Vue({
	el:"#app",
	methods:{
		search(){
			this.window.location.href="https://www.google.com/search?q="+this.keyWord
		}
	},
	data(){
		return {
			"window":window,
			"keyWord":null,
			"hearder":{
				"title":"一个导航啦",
				
			},
			"footer":{
				"content":""
			},
			list:[
					{
						"title":"工具",
						"id":"tool",
						"describtion":"一堆没用的工具导航",
						"urls":[
							{
								"name":"Github",
								"content":"github",
								"url":""
							},
							{
								"name":"SpiderTools",
								"content":"爬虫集合工具网站",
								"url":""
							}
						]
					},

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
