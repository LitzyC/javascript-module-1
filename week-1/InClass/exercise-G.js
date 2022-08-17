const numberOfStudents = 15;
const numberOfMentors = 8;
const totalPeople = 23;

// 65 de 23 dividido a 100 = 15 estudiantes
// 15 * 100 / 23 = 65%

console.log("Percentage students: "+ Math.round((numberOfStudents * 100)/ totalPeople) + "%");
console.log("Percentage mentors: "+ Math.round((numberOfMentors * 100)/ totalPeople) + "%");