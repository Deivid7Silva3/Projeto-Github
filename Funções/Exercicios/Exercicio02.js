//Crie uma função que receba um nome como parâmetro e exiba "Olá, [nome]!" sem console.

function exibirMensagem(nome){
    nome = prompt('Digite o seu nome:')
    console.log('Olá',nome);
}

exibirMensagem();


/**
 * Correção
 * 
 * function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Alice");

 */