const request = require('request');
const http = require('http')

// http.createServer((req,res)=>{
//     request("http://dog.ceo/api/breeds/image/random ", (err, resp, body) =>{
//         res.write('<a href="dogs">Update</a>')
//         let imgSrc = JSON.parse(body)
//         if (imgSrc.status = 'success') res.write(`<img src="${imgSrc.message}">`)
//     })
// }).listen(3000)

let arrOfImg = []

function createArrOfImg() {
    let imgSrc = ''
    let count = 0
    for (i=0;i<30;i++) {
        request("http://dog.ceo/api/breeds/image/random ", function (err, resp, body) {
            imgSrc = JSON.parse(body).message 
            arrOfImg[count] = imgSrc
            count++
            if (arrOfImg.length === 30) {console.table(arrOfImg)}
        })        
    }
}
createArrOfImg()




