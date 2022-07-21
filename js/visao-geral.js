// Para funcionar é necessário mudar o nome do arquivo para "script.js"

// Para selecionar e retornar elementos do DOM - getElementById

//Seleciona pelo ID

const animaisSection = document.getElementById("animais");
console.log(animaisSection.innerText);

// Selecionando por CLASSE: getElementByClassName
// Selecionando por TAG: getElementByTagName

// querySelector: retorna o primeiro elemento que combinar com o seu seletor

const animais = document.querySelector(".animais");

// para buscar um elemento dentro de uma UL apenas

const primeiroUl = document.querySelector("ul");

const navItem = primeiroUl.querySelector("li");

console.log(primeiroUl.innerText);

// Para selecionar o link que começa com #

const linksInternos = document.querySelector("[href^='#']");
console.log(linksInternos);

// Para retornar uma NodeList (todos elementos)
// Diferente do "getElementBy..." ele não atualiza caso o desenvolvedor retire ou acrescente algum item

const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg[2]);

// Adicionando uma nova classe na ul

primeiroUl.classList.add("classe-teste");
console.log(primeiroUl);

// Array-Like (HTMLColection e NodeList): parecem uma array, mas não são
// O forEach funciona apenas com o NodeList

const gridSelectionNode = document.querySelectorAll(".grid-section");
// retorna todos os valores por vez, percorrendo todos os valores contidos em "gridSelectionNode"

gridSelectionNode.forEach(function(item) {
    console.log(item);
});

// Transformando em array

const gridSelectionHTML = document.getElementsByClassName("grid-section");

const arrayGrid = Array.from(gridSelectionHTML);
console.log(arrayGrid);

// Agora já pode utilizar o forEach