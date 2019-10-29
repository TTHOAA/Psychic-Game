const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const randomizeLetter = () => {
    let k=Math.floor(Math.random()*26);
    let luckyLetter = letters[k];
    return luckyLetter;
};

let guesses = [];
let victories=0;
let defeats=0;
let attempts = 8;

document.getElementById('wins').append(victories);

document.getElementById('losses').append(defeats);

document.getElementById('remainder').append(attempts);

document.addEventListener('keyup',function(){
    let x = event.key;
    let z = x.toUpperCase();
    console.log(z);
    if(x == luckyLetter){
        victories = victories + 1;
        attempts = 8;
        guesses = [];
    }

  
})





    
    




