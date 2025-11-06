// Funçoes são blocos de codigo que podem ser 
// reaproveitados ao longo da execução do programa
// caracteristicas:
//     > podem ser nomeados ou não
//     >poder receber parâmetros ou não
//     >podem retornar valores ou não

function dizOla(){
    alert("Diz olá!")
}
function dizOlaPessoa(nome){
    alert(`Não seja timido(a) ${nome}, Fala oi` )

    //adição
}
function adicao(n1, n2){
    return n1+n2
}
const resultadoAdicao = adicao(4, 86)
console.log (`adição: ${resultadoAdicao}`)

//subtração

function subtracao(n1, n2){
    return n1-n2
}
const resultadoSubtracao = subtracao(125, 86)
console.log(`subtração: ${resultadoSubtracao}`)

//multiplicação
function multiplicacao(n1, n2){
    return n1*n2
}
const resultadoMultiplicacao = multiplicacao(5, 4)
console.log(`Multiplicação: ${resultadoMultiplicacao}`)

//divisão
function divisao(n1, n2){
    return n1/n2
}
const resultadoDivisao = divisao(10,2 )
console.log(`divisão: ${resultadoDivisao}` )
//faça uma versão para subtração, multiplicação, divisão



const jogadores = ['Neymar','Ronaldinho','Messi']
const frutas = ['uva','pera','banana']

// function formataTexto(lista){
//     for(let texto of lista){
//     //     console.log(texto.toUppercase('outra coisa'))
//         if (formataTexto) == String
//             console.log(texto.toUppercase())
//             else
//              console.log(texto())
            
//         //texto.toLowerCase() > tudo no diminutivo
//         //texto.trim() > elimina espaços em branco
//         //texto.join('outra coisa') > junta com outro texto
//     }
// }



//  formataTexto(jogadores)
// formataTexto(frutas)




//chamar a função
// dizOla()
// dizOlaPessoa("Matheus")
// dizOlaPessoa("Heloisa")
// dizOlaPessoa("Lorena")
// dizOlaPessoa(555)