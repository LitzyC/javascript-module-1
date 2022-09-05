function age(birthday) {
    return new Date().getFullYear() - birthday;
}

birthday = [
    1964, 
    2008, 
    1999, 
    2005, 
    1978, 
    1985, 
    1919
];

let ages = birthday.map(age);

console.log(ages);