// card contains the card class in html
let card = document.getElementsByClassName("card");

// we retrieve the blocCards elements from html and store them in an array
let arrayCards = [];
let blocCards = document.getElementById("blocCards");
let blocStart = document.getElementById("blocStart");
let time = 30;
let interval = null;
let result = [];
let clic = 0;
let score = 0;

blocCards.style.display = "none";

for (let i=0 ; i<card.length; i++) {
    arrayCards.push(card[i]);
}

// we retrieve the blocCards elements from html and store them in an array
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

// button that reloads the game
document.getElementById("reload").addEventListener("click", function() {
    reload();
});

// Function that mixes an array (Fisher's algorithm)
function random(array) {
    let i;
    let j;
    let tmp;
    for (i = array.length - 1; i>0; i--) {
        j = Math.floor(Math.random() * (i+1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}
arrayPictures = random(arrayPictures);

// function for the account in rebourg
function timer() {
    time--;
    if(time !== 0){	
        document.getElementById("timer").innerHTML = time + " secondes restantes";
    }	
}

// function that counts down at intervals of 1 second
function start(){
    interval = setInterval(timer, 1000);
}	

// function which returns the images to satan.webp if not even
function noPair () {
    result[0].src = "img/satanFull.webp";
    result[1].src = "img/satanFull.webp";
    result=[];
}

// function which reloads the page if necessary
function reload() {
    window.location.reload();
}

// function which launches the game by pressing on start
function play() {
    let start = document.getElementById("start");
    start.addEventListener('click', function (){
        blocCards.style.display = "block";
        game();
    });
}

// function that executes the whole game by comparing the cards
function game() {
    start();
    blocStart.style.display = "none";
    blocCards.style.display = "block";

    // for loop which goes through all the elements and on click replaces the image
    for(let i = 0; i < arrayCards.length; i ++) {   
        arrayCards[i].addEventListener('click', function() {
            if (arrayCards[i]) {    
                arrayCards[i].src = arrayPictures[i];
                result.push(arrayCards[i]); // la nouvelle valeur de l'index arrayCard est stoché dans result
                console.log(result);
                clic ++; 
                console.log(clic);  
            }
            // on the second click
            if (clic === 2) { 
                if (result[0] === "img/satanFull.webp") {
                    if (result[0].src === result[1].src) {
                        result[0].className = "clic";
                        result[1].className = "clic";
                        score ++;
                        console.log("score = " + score);
                    }
                    result=[];
                    // if score is 6 it's won the page reloads
                    if (score === 6) {
                        alert("win");
                        window.location.reload();
                        play();
                    }  
                }
                else {
                    setTimeout(noPair, 500);
                } 
                clic = 0;     
            }
        }); 
    }    
    setTimeout(reload, 30000);
}


play();

