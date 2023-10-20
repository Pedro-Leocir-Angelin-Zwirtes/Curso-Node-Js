/*var mostrarSite = true;
var site = 'www.hortodedoverde.com.br'

console.log("Hello World!!");
console.log("Meu nome é Pedro");
console.log("Estou aprendendo Node.js com o Guia do Programador");

if(mostrarSite) {
    console.log(site);
}*/

var somaFuncao = require("./calculadora.js")
var calculadora = require("./funcoes.js")

console.log(somaFuncao(10,20));
console.log(calculadora.multi(10,20));

var resultado_sub = calculadora.subt(10,20);
var resultado_div = calculadora.div(10,20);
console.log(resultado_sub);
console.log(resultado_div);
