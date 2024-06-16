// genera numeri random

function randomNumber (minNum, maxNum) {
    let generateNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    return generateNumber;
}

// funzione che genera numeri random in un range stabilito

function generateRandomNumbers (min, max, maxLen) {
    //imposta il range di numeri da generare
    const arrayRandomNumbers = [];
    // inserire la nungezza del nostro array
    while (arrayRandomNumbers.length < maxLen) {
            let generateNumber = randomNumber(min, max)
                //pushare deentro l'array i numeri solo una volta
        if (!arrayRandomNumbers.includes(generateNumber)){
            arrayRandomNumbers.push(generateNumber);
        }

    }
    return arrayRandomNumbers;
}

// funzione per la somma di un array numerico con x elementi
function sommaDiXNumeri (somma, array) {
    var somma = 0;
// Ciclo per sommare gli elementi dell'array
    for (var i = 0; i < array.length; i++) {
        somma += array[i];
    }
}
