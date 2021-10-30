# 写个网页吧

>HTML（Hyper Text Markup Language）
>
>CSS	(Cascading Style Sheet) 层叠样式表
>
>javascript
>
>> json
>>
>> jquery

-------

## 一.HTML（网页的骨架）

> html是一种描述网页的标记语言（超文本标记语言) ,标记语言由一套标记标签组成，学习HTML，就是学习标签。

标签（html的标签有很多种类，下面举几个比较常见的）

``` 
<head>网页设置相关的内容和title什么的</head>
<body>需要显示的内容</body>
<h1>一级标题</h1>
<p>一段话</p>			
```

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-
  <title>童子诚简介</title>
</head>

<body>
  <h1>欢迎来到 <span id="name">童子诚</span><span id="sex">👦</span>的<h1>self-introduction</h1></h1>
  <h2>哈哈哈，你好啊</h2>
  <p id="about">我是沈阳理工大学琴理工作室的一名实习成员，基本啥都不会但是在努力学习。未完待续。。。</p>
</body>
</html>
```



## 二.CSS(网页的皮肉)

> 实现内容与样式的分离，便于团队开发
>
> 样式复用，便于网站的后期维护
>
> 页面的精确控制，让页面更精美
>
> >样式表有很多关键字，熟练掌握需要长时间的训练

![image-20211019153825216](D:/我的软件/typora/asset/self-introduction/image-20211019153825216.png)

``` css
h1 
{
    color:gold;
    font-size    : 4em;
    margin-bottom: .5em;
}
h2
{
    color:dimgray;
    font-size    : 3em;
    margin-bottom: 1.3em;
}
p
{
    border:2px solid chartreuse;
    color:dimgray;
    font-size  : 1.5em;
    font-weight: 300;
    line-height: 1.6em;
    max-width  : 600px;    
}
```

### **可以用外部样式表的形式将CSS插入HTML**

``` html
<head>
<link rel="stylesheet" type="text/css" href="css文件路径">
</head>
```



------

## 三.javascript

> 是一种基于对象和事件驱动并具有相对安全性并广泛用于客户端网页开发的脚本语言，
>
> 同时也是一种广泛用于客户端Web开发的脚本语言。

``` js
// 只讲解ES6标准推荐的写法

// 变量
let a = 404
// a 的数据类型
typeof(a)
// 字符串
a = '404'   // 与 a = "404" 一样
typeof(a)

// 常量
const b = 404
typeof(b)
b = '404'   // 报错

// 对象 object
let obj = { "name": 'fzf', "age": 19 }
typeof(obj)
obj.name
obj.age = 18


// 条件判断
if (a == 404) {
  console.log('a is 404')
} else {
  console.log('a is not 404')
}

// for循环
for(let i=0; i<10; i++) {
  console.log(i)
}

// 函数
// 不需要指定返回类型及传入数据的类型
function add(a,b){
    return a+b;
}
```

```html
如何将js插入html
<body>
    <script src="文件名.js"></script>    <- 放后面
</body>

```

* JS代码要写在页面内容后，因为代码是一行一行执行的。

  

## jquery

> jQuery是一个实用的JavaScript库,让网页操作更简单

- [BootCDN](https://www.bootcdn.cn/)引入jQuery库

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello jQuery</title>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>     <-  这里呢
</head>
```



## json

JSON (JavaScript Object Notation, JS 对象标记) 是一种轻量级的数据交换格式。

``` json
info.json
{
  "name": "张三",
  "sex": 1,
  "intro": "大一学生，就读于沈阳理工大学物联网专业。",
  "about": "身体健康，大脑健全，心态良好，反诈骗能力高。啥都不会，进去想学东西的，emmmm没了。"
}
```



```js
app.js
$.getJSON('info.json', function (json) {

  $('#name').text(json.name)
  $("#intro").text(json.intro)
  $("#about").text(json.about)

  // 0为男生，1女生
  if (json.sex) {
    $("#sex").text('👦')
  } else {
    $("#sex").text('👧')
  }

})
```



