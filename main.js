const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativas: ["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 2",
        alternativas: ["alternativa 1", "alternativa 2"]
    },
    {
        enunciado: "pergunta 3",
        alternativas: ["alternativa 1", "alternativa 2"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }

} 

mostraPergunta();