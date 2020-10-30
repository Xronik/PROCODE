const fs = require('fs')  /// Подключаем библиотек FS
const request = require('request');   ///  Подключаем библиотеку Request

const file = 'img.svg'
const arrayrOfDirs = ['dir1','dir2']

arrayrOfDirs.forEach((element)=>{  ///  Создаем папки из массива
    fs.mkdir(element, (err)=> {
        if (err) console.log(`${element} allready exists`)
    })
})

fs.writeFileSync(file)  ///  Создаем картинку

const oldPath = 'img.svg'  ///  Указываем путь к начальной папку
const newPath = 'dir1/img.svg'  ///  Указываем путь следующей папки

fs.rename(oldPath, newPath, function (err) {  ///  Переносим картинку из основной папки в другую
  console.log('Successfully renamed - file moved!')
})

request('http://dou.ua', function (err, response, body) {  ///  Делаем запрос на DOU
    let strOfRequest = body

    let from = strOfRequest.search('b-footer-slider')  ///  Обрезаем футер с картинками
    let to = strOfRequest.search('footer-lang-switch')
    let newStrOfRequest = strOfRequest.substring(from,to)
    let strOfSrc = ''

    while (newStrOfRequest.includes('src')) {  ///  Вырезаем из футера все ссылки на картинки
        let startIndex = newStrOfRequest.search('src')
        let stopIndex = newStrOfRequest.search('srcset')
        strOfSrc += newStrOfRequest.substring(startIndex,stopIndex) + '\n'
        newStrOfRequest = newStrOfRequest.slice(stopIndex +2)
    }   

    fs.writeFileSync('arr.txt', strOfSrc)  ///  Записываем ссылки в файл arr.txt
});