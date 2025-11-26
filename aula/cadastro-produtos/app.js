/**ALGORITMO 
 * 1- Pegar a referências dos dados do Formulário
 * 2- Armazenar e agrupar os dados em Estrutura de Dados adequada
 * 3- Criar um Modelo dinâmico de Card
 * 4- Renderizar o Modelo de Card com os dados armazenados
 * 5- Apagar os dados da lista (último inserido na lista) 
 * 
 * CARD (3 linhas Div com img, h3, p) Classe CSS do card: 'card','imagem-container'
 * Após cada operação imporante Limpar Cache ou Atualizar Card
*/

const formulario = document.querySelector('#form-user')

const vpnRemover = document.querySelector('#remover')
const containerCards = document.querySelector('#container-cards')

const itensProdutos = [
    
]

// addEventListener => Escutador de Eventos
formulario.addEventListener('submit', function(event){
    event.preventDefault()
    const titulo = document.querySelector('#nome').value
    const descricao = document.querySelector('#descricao').value
    const urlImagem = document.querySelector('#img').value
   itensProdutos.push({titulo, descricao, urlImagem})
    alert(titulo)

    console.log(itensProdutos)
     
    renderizarCard()
    formulario.reset()
    //formulario.reset()
})

// CRIAR UMA FUNÇÃO QUE GERA UM TEMPLATE DO CARD

function criarCardNovo(item){
    //tudo: Criar tags html e retornar
     return `
        <div class="card">
            <div class="imagem-container">
                <img src="${item.urlImagem}" alt="Imagem">
            </div>
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        </div>
    `
}

//RENDERIZAR O CARD NOVO NA PAGINA DO APP

function renderizarCard(){
    //TUDO: Inserir card atualizado na página
     const item = itensProdutos[itensProdutos.length - 1]

     const cardHTML = criarCardNovo(item)
    
     containerCards.insertAdjacentHTML("beforeend", cardHTML)

}

vpnRemover.addEventListener('click', function(){
    alert('isso vai acabar deletando um card')

    itensProdutos.pop()

    const ultimoCard = containerCards.lastElementChild
    if(ultimoCard){
        containerCards.removeChild(ultimoCard)
    }
})