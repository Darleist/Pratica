let randomStringContainer = document.querySelector('.random_string')  

const  generateRandomString = (num) => {
    const characters ='abcdefghijklmnopqrstuvwxyz';
    let result1= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
}

const isPalindromo = (n) =>{
    let txt = n.split('').reverse().join('')
    if (txt == n) return true
    else {return false}
}

const displayRandomString =() =>{
    for(c=0; c<1000; c++){
        let res= generateRandomString(4)
        if (isPalindromo(res) == true) randomStringContainer.innerHTML += `A palavra <b>${res}</b> é palindroma <br>`
        console.log(res)
    }
    }

displayRandomString()