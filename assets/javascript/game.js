const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const randomizeLetter = () => {
    let k=Math.floor(Math.random()*26);
    let luckyLetter = letters[k];
    console.log(luckyLetter);
}