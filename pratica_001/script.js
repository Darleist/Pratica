const check = document.querySelector('#check')
const answer = document.querySelector('.answer')
let word = document.querySelector('.word')

const isPalindromo = () =>{
    let txt = word.value.split('').reverse().join('')
    if (txt == word.value) return true
    else {return false}
}

check.addEventListener('click', verificarPalindromo = () =>{ 
    if (isPalindromo() == true) answer.innerHTML = `A palavra <b>${word.value}</b> é um palindromo`
    else {answer.innerHTML = `A palavra <b>${word.value}</b> NÃO é um palindromo`}
    word.focus()
    word.value = ""
})

