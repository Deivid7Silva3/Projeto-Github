//Crie uma função que recebe dois números como parâmetros e retorna o maior deles

function resultadoDoMaior(maior1, maior2){
    maior1 = parseInt(prompt('Digite o primeiro número:'));
    maior2 = parseInt(prompt('Digite o segundo número:'));

    if(maior1 > maior2){
        alert(`O ${maior1} é maior`);
    }else{
        alert(`O ${maior2} é maior`);
    }
}

resultadoDoMaior();

/**
 * Correção
 * 
 * function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
 */