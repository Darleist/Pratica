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

function attMin () {
    let currentDate = new Date()
    let b = new Date("June 14, 2022 19:59:00"); //aquí vc deve mudar o minuto
    let c = (((b - currentDate)/1000)/60);
    c = Math.round(c)
    
    console.log(`Faltan ${c} minutos`) 
    console.log(b)
}

setInterval(() => {
        console.clear()
        time()
        attMin()
    }, 1000);
