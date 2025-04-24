const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}
const monthsOfYear = (date = new Date()) =>{ 
    const month= [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
return month[date.getMonth()];
}



try {
    document.getElementById('day').innerText = dayOfTheWeek();
    document.getElementById('month').innerText = monthsOfYear();
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;
exports.monthsOfYear=monthsOfYear;