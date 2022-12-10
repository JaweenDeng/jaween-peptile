const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const iconv = require('iconv-lite')
var BufferHelper = require('bufferhelper');
const XLSX = require('xlsx')
let allData = [];
const number = 5
for(var i =0; i<number; i++) {
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
            if(title && content) {
                allData.push({ title, content:content.replace(/^\s*|\s*$/g,""), description:title, type:3, status:1, sort:0})
            }
            if (i === number) {
                // 把数组写入json里面
                // fs.writeFile('./data1.json', JSON.stringify(JSON.stringify(allData)), function (err) {
                //     if (!err) {
                //         console.log('文件写入完毕');
                //     }
                // })
                let jsonWorkSheet = XLSX.utils.json_to_sheet(allData);
                let workBook = {
                    SheetNames: ['jsonWorkSheet'],
                    Sheets: {
                      'jsonWorkSheet': jsonWorkSheet,
                    }
                };
                xlsx.writeFile(workBook, "./aa.xlsx");
            }
        })
    })
}
