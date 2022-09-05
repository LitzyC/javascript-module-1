function getAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}
console.log("Estos son los años de nacimientos que pueden manejar: ");
function getDrivingStatus(birthYear){
    const age = getAge(birthYear);
    if (age >= 18){
        return birthYear;
    } else {
        const yearsToDrive = 18- age;
        return ` Si nació en ${birthYear}, puede manejar dentro de ${yearsToDrive} año/s.`;
    }
}

function printYear(text) {
    console.log(text);
}

const birthYears = [
    1964, 
    1999, 
    1978, 
    1985, 
    1919,
    2008,
    2005
];

const drivingStatuses = birthYears.map(getDrivingStatus);

drivingStatuses.forEach(printYear);