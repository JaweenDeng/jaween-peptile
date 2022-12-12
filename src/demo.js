// 生成excel文件demo
// node-xlsx
const fs = require('fs')
const path = require('path')
const nodexlsx = require('node-xlsx').default
const list = [
  [1, 2, 3],
  [true, false, null, 'sheetjs'],
  ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
  ['baz', null, 'qux'],
];
//由于各列数据长度不同，可以设置一下列宽
 const options = {'!cols': [{wch: 6}, {wch: 7}, {wch: 10}, {wch: 20}]}
//生成表格
var buffer = nodexlsx.build([{name:'sheet1',data:list }], options);
 
var filePath =path.join(__dirname, `./public/${(new Date().getTime())}.xlsx`); // 存储路劲和文件名
fs.writeFileSync(filePath,buffer,{'flag':'w'});//