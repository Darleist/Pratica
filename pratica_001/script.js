const check = document.querySelector('#check')
const answer = document.querySelector('.answer')


check.addEventListener('click', palindromo = () =>{
    let word = document.querySelector('.word')
    let txt = word.value.split('').reverse().join('')
    
    if (txt == word.value) {
        answer.innerHTML = `A palavra <b>${word.value}</b> é um palindromo`
    } else {
        answer.innerHTML = `A palavra <b>${word.value}</b> NÃO é um palindromo`
    }
    console.log(word.value)
    console.log(txt)

    word.focus()
    word = ''
})

