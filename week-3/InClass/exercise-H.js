const names= [
    "Linda", 
    "Andrea", 
    "Graciela", 
    "Karellys", 
    "Luis",
    "Litzy"
];

function nameList (names){
      if (names.find(nombre=> nombre === "Litzy" )){
    return `Encontrado!`;
    } else {
        return `No me has encontrado :( `;
        }
}
console.log(nameList(names));