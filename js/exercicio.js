// Para funcionar é necessário mudar o nome do arquivo para "script.js"

// Exercícios

// Retornando todas as imagens do site
// const sectionImg = document.querySelectorAll("img");
// console.log(sectionImg);

// sectionImg.forEach(function(item) {
//     console.log(item);
// });

// Pode ser dessa forma também
const sectionImg = document.getElementsByTagName("img");

console.log(sectionImg);

const arrayImg = Array.from(sectionImg);

arrayImg.forEach(function(item) {
    console.log(item);
});

// Imagens que comecem com a palavra imagem

const imgImagem = document.querySelectorAll("[src^='img/imagem']");

console.log(imgImagem);

imgImagem.forEach(function(item) {
    console.log(item);
});

// Links internos que começam com #

const linksInternos = document.querySelectorAll('[href^="#"]');

linksInternos.forEach(function(item) {
    console.log(item);
});

// Retornar o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");

console.log(primeiroH2.innerHTML);

// Selecionando o último p do site

const paragrafos = document.querySelectorAll("p");
// retorna a quantidade de p no site
const tamanho = paragrafos.length;

console.log(paragrafos[tamanho - 1]);