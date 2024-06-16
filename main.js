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
