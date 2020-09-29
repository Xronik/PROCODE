let sborka = {
    color: {
        type1: 'yellow',
        type2: 'green',
        type3: 'red',
        type4: 'blue',
        type5: 'orange',
    },
    transmition: {
        type1: 'avtomat',
        type2: 'manual',
    },
    conditioner: {
        type1: 'true',
        type2: 'false',
    },
    salon: {
        type1: 'leather',
        type2: 'cloth',
        type3: 'combine',
    },
}

let newCar = (array) => {
    for (let key in array) {
        console.log(key);
        for (let key2 in key) {
            console.log(key2);
        }
    }
}

newCar(sborka)

// let newCar = () => {
//     let newObj = {};
//     for (let key in sborka) {
//         let randomType = Math.floor(Math.random() * (Object.keys(sborka[key]).length));
//         newObj[key] = Object.values(sborka[key])[randomType];
//     }
//     return newObj;
// }
// let lada = newCar();
// let nissan = newCar();
// let lanos = newCar();
// let ford = newCar();
// console.log(lada)
// console.log(nissan)
// console.log(lanos)
// console.log(ford)
