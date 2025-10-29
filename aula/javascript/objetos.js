//dados simples: numericos, strings, boolean...
//array: [1,2,3 'ana']
//objetos: {nome:'ledson', idade: 36}
//funções: fucction somar (){}, () => {}

//Objetos literais
{
 //   propriedade: valor

}

const perfil ={
    nome: 'matheus zoreck',
    idade: 22,
    profissao: "vendedor",
    solteiro: false,
    roupas: ["camiseta","calça","blusa"]
}

console.log(Object.entries(perfil))//Taz a chave e valor
console.log(Object.keys(perfil))//Taz só as chaves
console.log(Object.values(perfil))//Traz só valores



// let dadosPerfil = []

// for(let dado in perfil){
//     dadosPerfil.push(perfil[dado])
// }

// alert(dadosPerfil)


// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteiro)
// console.log(perfil.roupas)

