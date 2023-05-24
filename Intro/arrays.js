const arrayPrueba = ["text", 456.1, false, {nombre:"Juanito"}[3,1,5,2]];

const array = ["mango", "pera"];
//METHODS
array.push("manzana"); // Equivalent to insert in PY
array.pop(); // Remove the last element

console.log(array);
console.log(array.length);
console.log(array[2]);

const a = Array.of("X", "Y", "Z", 1, 2, 3);
console.log(a);

const b = Array(10).fill("Hola");
console.log(b);

const colors = ["Red", "Green", "Blue"];

colors.forEach(function(el,index){
    console.log(`<li id="${index}">${el}</li>`)
})

