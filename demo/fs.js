const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
// if (err) {
    // throw err
// }
// console.log('Папка создана')
// })

const filepath = path.join(__dirname, 'test', 'text.txt')

// fs.appendFile(filepath, '\nI love develop', (err) => {
    // if (err) {
        // throw err
    // }
    // console.log('Файл создан')
// })

fs.readFile(filepath, (err, content) => {
if (err) {
    throw err 
}
const data = Buffer.from(content)
console.log('Content: ', data.toString())
})