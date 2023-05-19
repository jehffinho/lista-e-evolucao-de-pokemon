alert("Clique nos pokemons para ver sua Evolução e no Sol para q torne noite!") 


const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")

botaoAlterarTema.addEventListener("click", () =>{
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png")
    }else{
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png")
    }
})


const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")
const cards = document.querySelectorAll('.front-face, .back-face');
const fundo = document.querySelectorAll('.pokemonCard')

function flipcard(){
    this.classList.toggle('flip');
}

function flipPokemonCard(){
    this.classList.toggle('flip');
}

 cards.forEach(card => card.addEventListener('click', flipcard))

fundo.forEach(pokemonCard => pokemonCard.addEventListener('click', flipPokemonCard))












