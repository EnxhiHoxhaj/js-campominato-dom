// richiamo il contenitore dal DOM
let campoMinato = document.querySelector(".campo");
let generateCampo = document.querySelector("button");
let introductioGame = document.querySelector (".intro_play")
//gestione del clicK che genererà la griglia
generateCampo.addEventListener ("click",
    function(){ //tramite un ciclo che mi  genera 100 caselle
        for (let i = 1; i <= 100; i++) {

            //creiamo i div rappresenta<nti le caselle
            let bombSquare = document.createElement("div");

            // assegnamo la classe "square" e "show_element"

            bombSquare.classList.add("square");

            // aggiungere i numeri alle caselle
            bombSquare.innerHTML = i;

            // assegno la classe "show_element" al container delle caselle

            campoMinato.classList.add("show_element");

            // assegnamo a l'elemento introduzioneGioco e al bottone la classe "hidden"

            introductioGame.classList.add("hidden");

            generateCampo.classList.add("hidden");

            campoMinato.append(bombSquare);

            // creare un click sulle caselle
            // se cliccate prendono la classe "sky_blu"

            // stampare in console il numero
            bombSquare.addEventListener("click",
                function () {
                    bombSquare.classList.add("sky_blu");
                    console.log(i);
                }
            )

        }
    }
)

// creo l'arrai di numeri di 16 numeri compresi tra 1 e 100
 let arrayBomb = generateRandomNumbers (1, 100, 16);
 console.log(arrayBomb);
// gestire un click sulle caselle

//se la casella clicatta non è presente nell'array delle bombe la casella diventa azzurra 
    //il numero delle caselle cliccatte viene inserirto in una array
        // somma dai numeri dentro l'array

// se il numero cliccatto è presente nella lista delle bombe
    // casella si colora di rosso
    // gioco finisce con il messaggio di sconfitta e la somma del punteggio

