let cameraTemp = -5;

let purchaseInvoice = {
    milkBoxes: {
        number: 3,
        packagesInBox: {
            number: 20,
            condition: 'pasteurized',
            packages: 'polyethylene',
            expirationDate: 7,
            dateOfManufacture: 3,
            storageTemperature: 6,
        }

        // boxes: 3,
        // packagesInBox: 20,

    },
    butter: {
        boxes: 4,
        packagesInBox: 30,
        packages: 'paper',
        expirationDate: 20,
        dateOfManufacture: 3,
        storageTemperature: 10,
    },
    kefir: {
        boxes: 7,
        packagesInBox: 6,
        packages: 'plastic bottle',
        expirationDate: 2,
        dateOfManufacture: 3,
        storageTemperature: -2,
    },
    icecream: {
        boxes: 2,
        packagesInBox: 12,
        packages: 'waffle cup',
        expirationDate: 60,
        dateOfManufacture: 3,
        storageTemperature: -25,
    },

}

// let returnInvoice = {
//     milk: {
//         packageNmbr: 0
//     },
//     butter: {
//         packageNmbr: 0
//     },
//     kefir: {
//         packageNmbr: 0
//     },
//     icecream: {
//         packageNmbr: 0
//     },
// }

for (let key in purchaseInvoice) {
    console.log(purchaseInvoice[key].boxes);
    if (((purchaseInvoice[key].expirationDate - purchaseInvoice[key].dateOfManufacture) > 3) && (purchaseInvoice[key].storageTemperature > cameraTemp)) {
        returnInvoice[key].packageNmbr = purchaseInvoice[key].packagesInBox * purchaseInvoice[key].boxes;
        document.body.insertAdjacentHTML('afterbegin', `<div>  Приняли ${key} : ${returnInvoice[key].packageNmbr}</div>`)
    } else {
        document.body.insertAdjacentHTML('afterbegin', `<div>  Не приняли ${key} : ${purchaseInvoice[key].packagesInBox * purchaseInvoice[key].boxes}</div>`)
    }
}

