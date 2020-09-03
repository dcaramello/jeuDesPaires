// card contient les classe card en html
let card = document.getElementsByClassName("card");

// on recupere les elements blocCards de html et on les stock dans un array
let arrayCards = [];

for (let i = 0 ; i < card.length; i ++) {
    arrayCards.push(card[i]);
}

// un array d'images
let arrayPictures = [
    "img/boohan.jpg",
    "img/broly.jpg",
    "img/freezer.jpg",
    "img/migate.jpg",
    "img/piccolo.jpg",
    "img/rosé.jpg",
    "img/boohan.jpg",
    "img/broly.jpg",
    "img/freezer.jpg",
    "img/migate.jpg",
    "img/piccolo.jpg",
    "img/rosé.jpg"
];

let result = [];
let clic = 0;
let score = 0;


function game() {
    
    // boucle for qui parcourt tous les elements et au clic remplace l'image
    for(let i = 0; i < arrayCards.length; i ++) {   
        arrayCards[i].addEventListener('click', function() {
            if (arrayCards[i]) {      
                arrayCards[i].src = arrayPictures[i];
                result.push(arrayCards[i]); // la nouvelle valeur de l'index arrayCard est stoché dans result
                console.log(result);
                clic ++; 
                console.log(clic);  
            }

            // au deuxieme clic
            if (clic === 2) { 
                if (result[0].src === result[1].src) {
                    score ++;
                    console.log("score = " + score);
                    alert("Nickel ça !");
                    result=[];
                    
                    if (score === 2) {
                        alert("win");
                        window.location.reload();
                        play();
                    }  
                }
                else {
                    setTimeout(noPair, 1000);
                }
                clic = 0;     
            }
        }); 
    }    
}

// fonction qui remet les images a satan.webp si non paire
function noPair () {
    result[0].src = "img/satan.jpg";
    result[1].src = "img/satan.jpg";
    result=[];
}


function play() {
    let start = document.getElementById("start");
    start.addEventListener('click', function (){
        game();
    });
}





play();


// Fonction qui lance le jeu
// function play() {
//     score = 0;
//     result = [];
//     clic = 0;
//     let play = prompt("taper play pour jouer");
//     if (play === "play") {
//         for (let i = 0; i < arrayCards.length; i++) {
//             arrayCards[i].src = "img/satan.webp";
//         }
        
//         game();
//     }
// }

