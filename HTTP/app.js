var http = require("http");

http.createServer(function(requisicao,resposta){

    resposta.end("<h1>Bem vindo ao meu site!</h1><h2>Pedro Leocir</h2>");

}).listen(5000);

console.log("Meu servidor está rodando");
