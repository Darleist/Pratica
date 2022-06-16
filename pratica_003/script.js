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

setInterval(() => {
    console.clear()
    time()
    const dateToCompare = new Date("June 14, 2022 22:10:00")
    const diff = getDiffInMinutesFromNow(dateToCompare)
    console.log(diff)
}, 1000);
