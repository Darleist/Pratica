function addZero(num) {
    if (num.toString().length < 2) return '0'.concat(num)
    return (num)
}

function time () {
    let year = new Date().getFullYear()
    let month = addZero(new Date().getMonth() + 1)
    let day = addZero(new Date().getDate())
    let hour = addZero(new Date().getHours())
    let min = addZero(new Date().getMinutes())
    let sec = addZero(new Date().getSeconds())
    
    console.log(`Son las ${hour}:${min}:${sec} del día ${day}/${month}/${year}`)
}

function getDiffInMinutesFromNow(date) {
    const currentDate = new Date()
    const diffInMinutes = (((date - currentDate)/1000)/60);
    return Math.round(diffInMinutes)
}
function setMsg (minutes){
    if (minutes > 0) {
        if (minutes === 1) console.log(`En un minuto`)
        else console.log(`En ${minutes} minutos`)
    }
    else if (minutes === 0) console.log('En menos de un minuto atrás')
    else if (minutes < -1 && minutes > -65) console.log('Aproximadamente una hora atrás')
    else if (minutes < -65) {
        hours = (Math.round(minutes/60)) * -1 //multiplicação por -1 é para eliminar o sinal negativo  da frase abaixo
        console.log(`A ${hours} horas atrás`)
    }
}

setInterval(() => {
    console.clear()
    time()
    const dateToCompare = new Date("June 15, 2022 00:09:00")
    const diff = getDiffInMinutesFromNow(dateToCompare)
    setMsg(diff)
}, 1000);
