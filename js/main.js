// card contains the card class in html
let cards = document.getElementsByClassName("card");
let bloc = document.getElementById("bloc");

// we retrieve the blocCards elements from html and store them in an array
let blocCards = document.getElementById("blocCards");
let blocStart = document.getElementById("blocStart");
let time = 30;
let interval = null;
let result = [];
let clic = 0;
let score = 0;
let regSatan = /satanFull/;

blocCards.style.display = "none";



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

// creation of the block which contains the hidden cards
for (i=0; i<arrayPictures.length; i++) {
    let div = document.createElement("div");
    bloc.append(div);
    div.className = "col-4 col-md-3 col-lg-2 rounded p-2";
    let img = document.createElement("img");
    img.src = "img/satanFull.webp"
    img.className = "card";
    div.append(img);    
}


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
    for(let i = 0; i < cards.length; i ++) {
        cards[i].addEventListener('click', function() {
            if (cards[i].src.match(regSatan)) {   
                cards[i].src = arrayPictures[i];
                result.push(cards[i]); // the new value of the arrayCard index is stored in result
                clic ++; 
            }
            // on the second click
            if (clic === 2) { 
                if (result[0].src === result[1].src) {
                    score ++;
                    console.log("score = " + score);
                    result=[];
                    // if score is 6 it's won the page reloads
                }
                    if (score === 6) {
                        alert("win");
                        window.location.reload();
                        play();
                    }  
                else {  
                    setTimeout(noPair, 1000);
                } 
                clic = 0;     
            }
        });
    }    
    setTimeout(reload, 30000);
}

play();

