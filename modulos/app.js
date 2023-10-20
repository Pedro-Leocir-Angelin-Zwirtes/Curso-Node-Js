/*var mostrarSite = true;
var site = 'www.hortodedoverde.com.br'

console.log("Hello World!!");
console.log("Meu nome é Pedro");
console.log("Estou aprendendo Node.js com o Guia do Programador");

if(mostrarSite) {
    console.log(site);
}*/

var somaFuncao = require("./calculadora.js")

function multi(a,b){
    return a * b;
}

function subt(a,b) {
    return a - b;
}

function div(a,b) {
    return a / b;
}

console.log(somaFuncao(10,20));
console.log(multi(10,20));

var resultado_sub = subt(10,20);
var resultado_div = div(10,20);
console.log(resultado_sub);
console.log(resultado_div);
