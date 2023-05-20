const boleto = "VIP";
/*
let accessCode;
if (boleto === "VIP"){
    accessCode = "VIP-123-443-251"
} else {
    accessCode = "REG-345-126-427"
}
*/

const accessCode = (boleto === "VIP") ? "VIP-123-443-251" : "REG-345-126-427" ;

console.log(accessCode)