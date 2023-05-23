function funcionConReturn () {
    const uno = console.log("Uno")
    const dos = console.log("dos")
    return console.log("Hola")
};

funcionConReturn();

/* let valorFuncion = funcionConReturn();

console.log(valorFuncion) */

let variable = "Hola xd"

//Asign default parameters

function greet (name = "Desconocido", age = "0"){
    console.log(`Hola mi nombre es ${name} y tengo ${age} años`);
}

greet("Joshua", 21)