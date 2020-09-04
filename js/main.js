// card contient les classe card en html
let card = document.getElementsByClassName("card");

// on recupere les elements blocCards de html et on les stock dans un array
let arrayCards = [];
let blocCards = document.getElementById("blocCards");
let blocStart = document.getElementById("blocStart");

for (let i = 0 ; i < card.length; i ++) {
    arrayCards.push(card[i]);
}




// un array d'images
let arrayPictures = [
    "img/boohanFull.webp",
    "img/brolyFull.webp",
    "img/freezerFull.webp",
    "img/migateFull.webp",
    "img/piccoloFull.webp",
    "img/roséFull.webp",
    "img/boohanFull.webp",
    "img/brolyFull.webp",
    "img/freezerFull.webp",
    "img/migateFull.webp",
    "img/piccoloFull.webp",
    "img/roséFull.webp"
];


// Fonction qui melange un array (l’algorithme de Fisher)
function random(array) {
    var i, j, tmp;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}
arrayPictures = random(arrayPictures);
console.log(arrayPictures);


// fonction qui remet les images a satan.webp si non paire
function noPair () {
    result[0].src = "img/satanFull.webp";
    result[1].src = "img/satanFull.webp";
    result=[];
}

// function qui recharge la page si besoin
function reload() {
    window.location.reload();
}

// fonction qui lance le jeu en appuiyan sur start
function play() {
    let start = document.getElementById("start");
    start.addEventListener('click', function (){
        blocCards.style.display = "block";
        game();
    });
}

// initialisation des variables vides, result stock les 2 elements a comparer quand clic est egal a 2. le jeu est terminé quand score est a 6.
let result = [];
let clic = 0;
let score = 0;

blocCards.style.display = "none";


// function qui exectute tout le jeu en comparant les cartes
function game() {
    blocStart.style.display = "none";
    blocCards.style.display = "block";

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
                    result=[];
                    
                    if (score === 6) {
                        alert("win");
                        window.location.reload();
                        play();
                    }  
                }
                else {
                    setTimeout(noPair, 300);
                } 
                clic = 0;     
            }
        }); 
    }    
    setTimeout(reload, 30000);
}


play();




