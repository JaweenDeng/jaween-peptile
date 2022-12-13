/*
 * @Author: djw
 * @Description: 笑话大全
 */
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const iconv = require('iconv-lite')
var BufferHelper = require('bufferhelper');
const nodexlsx = require('node-xlsx').default
const path = require('path')
let allData = [
    ['title', 'content', 'description', 'type', 'status', 'sort']
];
const number = 5000
for(let i =0; i<=number; i++) {
    https.get(`https://xiaohua.zol.com.cn/detail59/${i}.html`, function (res) {
        var bufferHelper = new BufferHelper();
        // 有数据产生的时候 拼接
        res.on('data', function (chunk) {
            bufferHelper.concat(chunk)
        })
        // 拼接完成
        res.on('end', function () {
            const $ = cheerio.load(iconv.decode(bufferHelper.toBuffer(),'GBK'));
            const title = $('.article-title').html()
            const content = $('.article-text').html()
            const arr = []
            if(title && content) {
                arr.push(title, `<div>${content.replace(/^\s*|\s*$/g,"")}</div>`, title, 3, 1, 0)
            }
           arr.length && allData.push(arr)
            if (i === number) {
                //生成表格
                const buffer = nodexlsx.build([{name:'sheet1',data:allData }]);
                var filePath = path.join(__dirname, `../public/${(new Date().getTime())}.xlsx`); // 存储路劲和文件名
                fs.writeFileSync(filePath,buffer,{'flag':'w'});//
            }
        })
    })
}