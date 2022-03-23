const momenti = require('moment')

const ahora = momenti()

console.log(ahora) // Nos enseña la fecha del día de hoy

console.log(ahora.toString()) // Pasado a string mejor

console.log(ahora.format('YYYY/MM/DD - HH:mm')) // Obtener año/mes/día - hora:minutos ( Cómo yo le indique dentro del parámetro string )

console.log(ahora.daysInMonth()) // Obtener los días que tiene el mes actual // = 31

console.log(ahora.calendar()) // Obtener un string con la hora actual // = Today at 7:11 PM

console.log(ahora.dayOfYear()) // Obtener los días en total que han pasado desde que ha empezado el año // = 81

console.log(ahora.isoWeek()) // Obtener la semana del año en la que estamos // = 12

console.log(ahora.weekday()) // Obtener el día de la semana en el que estamos desde que empezó la semana ( es martes hoy ) // = 2

console.log(ahora.minute()) // Obtener el minuto de la hora actual ( son las 19:22 ) // = 22

// Entre otros tantos más...