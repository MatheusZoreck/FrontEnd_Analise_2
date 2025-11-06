/*
* Funções arrow são funções anônimas, ou seja, sem nome
* podem ser passadas como parametros para outras funções
* ou podem ser atribuidas à variaveis.
* Em Javascrit, funções são conhecidas como
* "Cidadão de Primeira Classe"
*/

// let numero = 0
// setInterval(function(){
//     numero= numero + 5
//     console.log(numero)
// }, 1000)

//refatorar
let numero = 0
const intervalo1 = setInterval(() => {
    numero= numero + 5
    console.log(numero)
}, 1000)

setTimeout(() => {
    clearInterval(intervalo1)
}, 5000)

// function calc2(x,y){}
// const calcFinal = calc2(2,3)
// const calculadora = function(){}
//const nomeCompleto = () => {
// return 'pedro'}
//const nomeCompleto1 = nome =>