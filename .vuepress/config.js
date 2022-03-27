module.exports = {
  "title": "小辰的博客",
  "description": "记录学习生活",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
	  {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "测试",
            "link": "/docs/mytest/"
          }
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },

      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/xc979906570?type=blog",
            "icon": "reco-csdn"
          }
        ]
      }
    ]
	,"subSidebar": 'auto'//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
	,"sidebar": {
		// 实现二级目录
      "/docs/mytest/": [
        {
          title: "测试",
          children: [
			'main'
          ]
        },
		{
		  title: "测试2",
          children: [
			'app1','plugin'
          ]
		}
	  ]
    }
	,
	
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "博客"
      },
      "tag": {
        "location": 4,
        "text": "标签"
      }
    },
/*     "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ], */
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "lzj",
    "authorAvatar": "/avatar.png",
    "record": "记录学习生活",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}