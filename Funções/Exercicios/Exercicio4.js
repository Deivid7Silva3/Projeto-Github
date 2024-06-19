//Crie uma função que recebe três números como parâmetros e retorna a média deles

function resultadoDeTela(valor1,valor2,valor3){
    valor1 = parseInt(prompt('Digite o primeiro número:'));
    valor2 = parseInt(prompt('Digite o segundo número:'));
    valor3 = parseInt(prompt('Digite o terceiro número:'));

    let media = valor1 + valor2 + valor3 / 3;

    console.log(media);
}

resultadoDeTela();

/**
 * Correção
 *  
 * function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);
 * 
 */