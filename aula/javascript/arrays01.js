/*
Arrays são agrupadores de valores numericos,
textuais, booleanos, objetos, etc. Eles são
ordenados a partir do indice '0'

Ex.: const time= ['pedro',22, 'julio', 'Ana']
    // indices       0     1     2       3
*/

const vestuario = ['regata','chinelo', 'calça jean','cordão','relogio']
vestuario[33]= 'zorba' //atribuição dinamica

for(let valor of vestuario){
    console.log(valor)
}

// console.log(vestuario[1])
// console.log(vestuario[0])
// console.log(vestuario[4])
// console.log(vestuario[33])