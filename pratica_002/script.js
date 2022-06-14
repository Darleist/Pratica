let randomStringContainer = document.querySelector('.random_string')  

const  generateRandomString = (num) => {
    const characters ='abcdefghijklmnopqrstuvwxyz';
    let result1= ' ';
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
   
    for(c=0; c<10; c++){
        let res= generateRandomString(1)
        if (isPalindromo(res) == true) randomStringContainer.innerHTML += res
     //   else {randomStringContainer.innerHTML += res}
        console.log(res)
    }
    
    }

displayRandomString()