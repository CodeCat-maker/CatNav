# CatNav

Version 2.0

created by Vue2.x

<img src="https://i.bmp.ovh/imgs/2022/05/17/4ef9cf8ef110694b.jpg" style="zoom: 25%;" />

<img src="https://i.bmp.ovh/imgs/2022/05/17/22e2de3bbced9a85.png" style="zoom: 25%;" />



# Hello friends 🖐️

If you want to have a nav website, you can chose it.It wiil help you

# 💡 Support

Google Search

# 📌 Installation

First👇

```sh
fork this repository
```

Second👇

paste these code on your server

```sh
mkdir server
pwd -> list this "usr/server"
glone your repository ot "usr/server/nav"
docker run --name nginx-nav -v /home/ubuntu/server/nav:/usr/share/nginx/html:ro -d -p 80:80 nginx
```

-v: mount dir

-p:expose port

# 🚩 Using

```sh
cd "usr/server/nav"
vi js/index.js
change your own configJs
```

📍 For example :

```js

{
  "title":"Demo",
    "id":"demo",
      "describtion":"demo",
        "urls":[
          {
            "name":"Demo",
            "content":"demo",
            "url":""
          }
        ]
}
```

Other Function

```js
"searchEngine": "Baidu", //defalut Search Engineer
  "hearder": {
    "title": "猫猫的一个导航啦",

  },
    "footer": {
      "content": ""
    }
```

You can change the autosuggest and get smart suggetions by <u>Baidu Api</u> and <u>Google Api</u>,by this way, you can change them by yourself ways which makes you comfortable. The **Header Title** is the top of the web

In another way, just modify this file and run docker with it, you will get one nav site. It's very useful and simplify.





