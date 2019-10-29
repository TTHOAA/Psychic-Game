const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const randomizeLetter = () => {
    let k=Math.floor(Math.random()*26);
    let luckyLetter = letters[k];
    return luckyLetter;
};

let luckyLetter = randomizeLetter();
console.log('Lucky letter is ' + luckyLetter);

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
    const guesscheck = guesses.includes(' ' + z);
    const letterCheck =letters.includes(z);
    console.log(z);
    
    if (guesscheck == false && letterCheck == true){
        guesses.push(' ' + z);
    }
    document.getElementById('guesses').innerHTML= guesses;
    if(z == luckyLetter){
        victories = victories + 1;
        document.getElementById('wins').innerHTML=victories;
        
       
        attempts = 8;
        document.getElementById('remainder').innerHTML=attempts;
        
        guesses = [];

        luckyLetter = randomizeLetter();
        console.log('Lucky letter is ' + luckyLetter);
        
    }

  
})





    
    




