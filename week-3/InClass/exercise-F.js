function getAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

function getDrivingStatus(birthYear){
    const age = getAge(birthYear);
    if (age >= 18){
        return `Nació en ${birthYear}, puede manejar.`;
    } else {
        const yearsToDrive = 18- age;
        return `Nació en ${birthYear}, puede manejar dentro de ${yearsToDrive} año/s.`;
    }
}

function printYear(text) {
    console.log(text);
}

const birthYears = [
    1964, 
    2008, 
    1999, 
    2005, 
    1978, 
    1985, 
    1919
];

const drivingStatuses = birthYears.map(getDrivingStatus);

drivingStatuses.forEach(printYear)