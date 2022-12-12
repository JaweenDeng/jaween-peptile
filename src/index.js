const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const iconv = require('iconv-lite')
var BufferHelper = require('bufferhelper');
const nodexlsx = require('node-xlsx').default
const path = require('path')

class Peptile {
    constructor(config, frequency, url) {
        this.config = config // 爬的属性名，已经对应页面上的className,比如：{title:".article-title"}
        this.frequency = frequency // 循环次数
        this.url = url // `https://xiaohua.zol.com.cn/detail59/[i].html`
    }
    run() {
        let allData = []
        allData.push(Object.keys(this.config))
        for(let i = 0; i<=this.frequency; i++) {
            const requestUrl = this.url.replace('[i]', i)
            https.get(requestUrl,  (res) => {
                const bufferHelper = new BufferHelper();
                // 有数据产生的时候 拼接
                res.on('data', function (chunk) {
                    bufferHelper.concat(chunk, i)
                })
                // 拼接完成
                res.on('end', () => {
                    const $ = cheerio.load(iconv.decode(bufferHelper.toBuffer(),'GBK'));
                    const arr = []
                    Object.keys(this.config).forEach(key => {
                        const div = $(this.config[key])
                        if (div && div.html()) {
                            arr.push(div.html())
                        }
                    })
                    if (arr.length > 0) {
                        allData.push(arr)
                    }
                    if (i === this.frequency) {
                        //生成表格
                        const buffer = nodexlsx.build([{name:'sheet1',data:allData }]);
                        var filePath = path.join(__dirname, `../public/${(new Date().getTime())}.xlsx`); // 存储路劲和文件名
                        fs.writeFileSync(filePath,buffer,{'flag':'w'});
                    }
                })
            })
        }
    }
}


const peptile = new Peptile({
    title:'.article-title',
    content:'.article-text'
}, 5, 'https://xiaohua.zol.com.cn/detail59/[i].html')
peptile.run()