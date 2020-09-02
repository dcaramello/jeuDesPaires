// card contient les classe card en html
let card = document.getElementsByClassName("card");

// on recupere les elements blocCards de html et on les stock dans un array
let arrayCards = [];
let blocCards = document.getElementById("blocCards");

for (let i = 0 ; i < 12; i ++) {
    arrayCards.push(card[i]);
}

// un array d'images
let arrayPictures = [
    "img/boohan.webp",
    "img/broly.webp",
    "img/freezer.webp",
    "img/migate.webp",
    "img/piccolo.webp",
    "img/rosé.webp",
    "img/boohan.webp",
    "img/broly.webp",
    "img/freezer.webp",
    "img/migate.webp",
    "img/piccolo.webp",
    "img/rosé.webp"
];

let result = [];
let clic = 0;

function getImages() {
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
                    alert("Nickel ça !");
                    result=[];
                    console.log(result);
                }
                else if (result[0].src != result[1].src) {
                    result[1].src = this.src;
                    console.log(result[1]);
                    setTimeout(1000);
                    result[1].src = "img/satan.webp"
                    console.log(result[1]);
                }
                
                clic = 0;
            }
        }); 
    }       
}
getImages();



