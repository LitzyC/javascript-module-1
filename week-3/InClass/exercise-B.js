//Si esta Luis = Luis esta en la clase
//Si no esta Luis = Luis esta en la clase de Gabriel
const members = ['Andrea', 'Karelys', 'Linda', 'Graciela', 'Luis', 'Gabriel'];
const members2 = ['Litzy', 'Oswaldo', 'Alejandro', 'Fernanda', 'Lina', 'Winston'];

function estudiantes(miembro) {
    if(members.includes('Gabriel') === members.includes(miembro)){
        return `${miembro} esta en la clase con ${members.join(", ")}\n`;
    
    }else if (members2.includes('Alejandro') === members2.includes(miembro)){
        return `${miembro}, esta en la clase 2 con ${members2.join(", ")}\n`;
    
    }else if(members.includes('Juan', 'Alejandro') === members.includes(miembro)){
        return `${miembro} no esta en la clase con ${members.join(", ")}\n`;
    
    }
}

console.log(estudiantes("Juan"));
console.log(estudiantes("Gabriel"));
console.log(estudiantes("Alejandro"));