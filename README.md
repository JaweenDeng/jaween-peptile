# 爬取数据转excel输出
下载项目，运行`dev`,  
实例化对象，传入3个参数，    
config:爬的属性名，已经对应页面上的className,比如：{title:".article-title"}  
frequency:循环次数  
url:爬取的url，https://xiaohua.zol.com.cn/detail59/[i].html, [i]为占位符，为了替换数字  
最后生成的excel文件  
````
const peptile = new Peptile(config, frequency, url)
peptile.run()

````
例如:
````
const peptile = new Peptile({
    title:'.article-title',
    content:'.article-text'
}, 5, 'https://xiaohua.zol.com.cn/detail59/[i].html')
peptile.run()

````