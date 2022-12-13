/*
 * @Author: djw
 * @Description: 网易云热评
 */
const axios = require('axios')
const cheerio = require('cheerio');
var BufferHelper = require('bufferhelper');
const nodexlsx = require('node-xlsx').default
const path = require('path')
const fs = require('fs');
let allData = [
    ['title', 'content', 'description', 'type', 'status', 'sort', 'pageSize']
];
const number = 114
let s = 1
for(let n =1; n<=number; n++) {
    axios
    .get(`http://reping01.cn/category-list/1.html?page=${n}`)
    .then((response) => {
        const $ = cheerio.load(response.data)
        for(let i = 1; i<=10; i++) {
            let childNum = $('#list').children(`.article:nth-child(${i})`).children().length
            const arr =[]
            let realContent = $('#list').children(`.article:nth-child(${i})`).find(`p:nth-child(${childNum-2})>a`).text()
            if ($('#list').children(`.article:nth-child(${i})`).find(`.cwrap span`).text()) {
                realContent = $('#list').children(`.article:nth-child(${i})`).find(`.cwrap span`).text()
            }
            const title = $('#list').children(`.article:nth-child(${i})`).find(`p:nth-child(${childNum-1})>a:nth-child(2)`).text()
            const content = $('#list').children(`.article:nth-child(${i})`).find(`p:nth-child(${childNum-1})>a:nth-child(3)`).text()
            const realTitle = content ? `${title} ${content}` : title
            if (realContent && realTitle) {
                arr.push(realTitle, `<div>${realContent}</div>`, realTitle, 4, 1, 0, n)
            }
            // console.log(realContent, 'realContent')
            if (arr.length>0) { allData.push(arr) }
        }
        if (s === number) {
            const buffer = nodexlsx.build([{name:'sheet1',data:allData }]);
            var filePath = path.join(__dirname, `../public/${(new Date().getTime())}.xlsx`); // 存储路劲和文件名
            fs.writeFileSync(filePath,buffer,{'flag':'w'});//
        }
        s = s + 1
    })
    .catch((error) => {
        console.error(error)
    });
}