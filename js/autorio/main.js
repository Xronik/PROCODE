
const request = require('request');   ///  Подключаем библиотеку Request
const fs = require('fs')

let newArr = []
request('https://auto.ria.com/uk/search/?category_id=1&marka_id=2233&model_id=0&city%5B0%5D=0&state%5B0%5D=0&s_yers%5B0%5D=0&po_yers%5B0%5D=0&price_ot=&price_do=', function (err, response, body) {  ///  Делаем запрос на DOU
    let strOfRequest = body

    let from = strOfRequest.search('userAdverts')  ///  Обрезаем блок с картинками
    let to = strOfRequest.search('reviewForm')
    let newStrOfRequest = strOfRequest.substring(from, to)
    let strOfSrc = ''
    let i = 0

    while (newStrOfRequest.includes('class="blue bold">')) {  ///  Вырезаем отдельные блоки с даными машины
        let startIndex = newStrOfRequest.search('class="blue bold">')
        let stopIndex = newStrOfRequest.search('</span>&nbsp;грн')
        strOfSrc = newStrOfRequest.substring(startIndex, stopIndex)

        let models = strOfSrc.substring(strOfSrc.indexOf('Tesla'), strOfSrc.indexOf('</span>'))
        let years = strOfSrc.substring(strOfSrc.indexOf('</span> ') + 8, strOfSrc.indexOf(' </a> </div> </div>'))
        let priceUSD = strOfSrc.substring(strOfSrc.indexOf('currency="USD">') + 15, strOfSrc.indexOf('</span>&nbsp;<'))
        let priceUAH = strOfSrc.substring(strOfSrc.indexOf('currency="UAH">') + 15)
        let arr = [models, years, +priceUSD.replace(/\s/g, ''), +priceUAH.replace(/\s/g, '')]
        newArr[i] = arr
        newStrOfRequest = newStrOfRequest.slice(stopIndex + 10)
        i++
    }

    let csvData = () => {
        let data = ''
        newArr.forEach((key) => {
            key.forEach((element) => {
                data += `"${element}";`
            })
            data = data.slice(0, -1) + '\n'
        })
        return data.slice(0, -1)
    }

    let saveCSVFile = () => {
        let csvFileName = `CSV_${timeNow()}.csv`

        try {
            fs.writeFileSync(csvFileName, csvData())
        } catch { throw 'File cant be written' }
    }

    saveCSVFile()

});

const timeNow = () => {
    let newDate = new Date()
    let dateFormat = new Intl.DateTimeFormat('ua-UA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    return dateFormat.format(newDate).replace(/[^0-9\s]/g, '').replace(' ', '-')
}


let htmlTableInput = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        let tableHtmlStr = data.replace(/;/g, '</td><td>').replace(/\n/g, '</td></tr><tr>')
        tableHtmlStr = `<table><tr><td>${tableHtmlStr}</td></tr></table>`
        console.log(tableHtmlStr);
    })
}

htmlTableInput('CSV_20201031-183622.csv')