var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const arrayMentors = [mentor1, mentor2, mentor3, mentor4, mentor5];

function greeting(arrayMentors){
    arrayMentors.forEach(mentor => {
        console.log("HELLO "+ mentor.toUpperCase())
    });
}

greeting(arrayMentors);