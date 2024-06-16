// genera numeri random

function randomNumber (minNum, maxNum) {
    let generateNumber = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);
    return generateNumber;
}

// funzione che genera numeri random in un range stabilito

function generateRandomNumbers (min, max, maxNum) {
    //imposta il range di numeri da generare
    let arrayRandomNumbers = [];
    // inserire la nungezza del nostro array
    while (arrayRandomNumbers.length < maxNum) {
        let newArrNum = randomNumber (min, maxNum);
    }
    //pushare deentro l'array i numeri solo una volta
    if (!arrayRandomNumbers.includes(newArrNum)){
        arrayRandomNumbers.push(newArrNum);
    }
    return arrayRandomNumbers;
}