const user = {
    age : 17,
    country: "Mexico",
    ticket: true,
};

if (user.age >= 18 || user.ticket){
    console.log("Acceso concedido")
} else{
    console.log ("Acceso denegado")
}

if (user.country ==="Mexico"){
    console.log("El usuario es mexicano");
} else if (user.country ==="Colombia"){
    console.log("El usuario es colombiano")
} else if (user.country ==="Peru"){
    console.log("El usuario es peruano")
} else {
    console.log("El usuario es de otra nacionalidad.")
}

switch(user.country){
    case "Peru": 
        console.log("El usuario es peruano");
        break;
    case "Colombia": 
        console.log("El usuario es colombiano")
        break;    
    case "Mexico": 
        console.log("El usuario es mexicano")
        break;
}