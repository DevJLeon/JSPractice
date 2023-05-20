/*
OP LOGICOS:
&& - AND
|| - or xd
! - not
*/

const nombre = "Carlos";
const edad = 18;
const entrada = false;
const permiso = true;
 
const permitirAcceso = (edad >= 18 && entrada) || permiso;
console.log("Acceso permitido al concierto: "+permitirAcceso);

