// forEach e Arrow Function

// forEach

// const imgs = document.querySelectorAll("img");

// imgs.forEach(function(item, index, array) {
//     console.log(item);
//     console.log(index);
//     console.log(array);
// });

// Caso seja um objeto que não possua o método de array, o ideal é transformá-lo em uma array, como o HTMLColection

const titulos = document.getElementsByClassName("titulo");

const arrayTitulos = Array.from(titulos);

// arrayTitulos.forEach(function(item, index) {
//     // console.log(item, index);
// });

// Arrow Function: sintaxe curta em relação a "function expression"

// Basta remover a palava "function" e adicionar a fat arrow "=>" após o(s) argumento(s)

const img = document.querySelectorAll("img");
// se tiver apenas um argumento, não é necessário o parênteses, mas se não tiver nenhum argumento, é necessário o parênteses
img.forEach((item, index) => {
    // console.log(item, index);
});

// Se tiver apenas uma linha de código, não é necessário utilizar as chaves

// let i = 0;
img.forEach((item) => console.log(item));

// EXERCÍCIO

// mostrar cada parágrafo do site

const paragrafo = document.querySelectorAll("p");

paragrafo.forEach((item) => console.log(item));

// texto dos parágrafos

paragrafo.forEach((item) => console.log(item.innerText));

// corrigindo erros do código abaixo

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => console.log(item, index));

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

img.forEach(() => i++);
console.log(i);