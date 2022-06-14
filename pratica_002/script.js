const randomStringContainer = document.querySelector('.random_string')  

function generateRandomString(size) {
    const characters ='abcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < size; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function isPalindromo(word) {
    const txt = word.split('').reverse().join('')
    if (txt === word) return true
    return false
}

function displayRandomString(){
    const NUM_WORDS = 1000;
    for(i = 0; c < NUM_WORDS; i++){
        const word = generateRandomString(4)
        if (isPalindromo(word)) {
            randomStringContainer.innerHTML += `A palavra <b>${res}</b> é palindroma <br>`
        }
    }
}

displayRandomString()
