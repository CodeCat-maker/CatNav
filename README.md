# CatNav

created by Vue2.x

![](https://i.bmp.ovh/imgs/2022/05/17/4ef9cf8ef110694b.jpg)

![](https://i.bmp.ovh/imgs/2022/05/17/22e2de3bbced9a85.png)



# Hello friends ๐๏ธ

If you want to have a nav website, you can chose it.It wiil help you

# ๐ก Support

Google Search

# ๐ Installation

First๐

```sh
fork this repository
```

Second๐

```sh
mkdir server
pwd -> list this "usr/server"
glone your repository ot "usr/server/nav"
docker run --name nginx-nav -v /home/ubuntu/server/nav:/usr/share/nginx/html:ro -d -p 80:80 nginx
```

-v: mount dir

-p:expose port

# ๐ฉ Using

```sh
cd "usr/server/nav"
vi js/index.js
change your own configJs
```

๐ For example :

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

and the vue will parse this index.js





