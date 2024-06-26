//Crie uma função que recebe um número como parâmetro e retorna o dobro desse número

function resultadoNaTela(numero){
        numero = parseInt(prompt('Digite um número:') * 2);
        console.log(numero);
        
}

resultadoNaTela();

/**
 * Correção
 * 
 * function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);
 * 
 */