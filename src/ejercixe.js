

function dayOftheProgrammer(year) {
    
    const isGregorian = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    const isJulian = year % 4 === 0;

   let fecha = new Date(year, 8)
   var options = {
         month: "2-digit"
   }
   const month = Intl.DateTimeFormat("es-ES", options).format(fecha)
    const date = fecha.getFullYear()
    console.log(date)
   
    let day = 0
    let result = '';
    if (isGregorian || isJulian) {
        day = 12
       result  = `${day}.${month}.${date}`
       return result
    } else {
        day = 13
        result  = `${day}.${month}.${date}`
        return result
    }


    
}

 const año = 2020

console.log(dayOftheProgrammer(año))