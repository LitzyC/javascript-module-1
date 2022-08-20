function getAgeInDays(age) {
  return 2022 - age ;
}

function createGreeting(name, age) {
  const ageInDays = getAgeInDays(age);
  const message =
    "Tu nombre es " + name + " y naciste en el año " + ageInDays + ".";
  return message;
}

console.log(createGreeting("Litzy", 21));