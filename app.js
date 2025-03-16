//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.

let amigos = [] // Array para armazenar os nomes dos amigos

function adicionarAmigo() { // Função para adicionar amigos
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome); // Função para atualizar lista de amigos
    inputNome.value = ''; // Limpar o campo de entrada
}

function sortearAmigo() { // Função para sortear amigo aleatoriamente
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de realizar o sorteio.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gerar um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];
    let resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
