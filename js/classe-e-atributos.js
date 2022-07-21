// Classes e Atributos

// classList: retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém

const menu = document.querySelector(".menu");

console.log(menu.className);
console.log(menu.classList);

menu.classList.add("ativo-teste", "mobile-teste");
console.log(menu.classList);

menu.classList.remove("ativo-teste");
console.log(menu.classList);

menu.classList.replace("mobile-teste", "nada-teste");
console.log(menu.classList);

menu.classList.remove("nada-teste");
console.log(menu.classList);

// Adicionando classe sobrepondo o nome dela

// menu.className += " novaClasse"; //sempre colocar um espaço antes
// console.log(menu.className);

// atributs: retorna uma array-like com os atributos do elemento

const animais = document.querySelector(".animais");

console.log(animais.attributes.id);

// getAttribute e setAttribute

const img = document.querySelector("img");

console.log(img.getAttribute("src"));

// console.log(img.setAttribute("alt", "Imagem de uma raposa"));

/// EXERCÍCIOS

// Adicionando a classe "ativo" em todos os "a" da classe menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => item.classList.add("ativo"));

// Removendo a classe "ativo" e mantendo a do primeiro item
itensMenu.forEach((item) => item.classList.remove("ativo"));
itensMenu[0].classList.add("ativo");

// Verificando se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");

imagens.forEach((item) => console.log(item.hasAttribute("alt")));

//Modificando o href do link externo no menu

const link = document.querySelector('a[href^="http"');

console.log(link);

link.setAttribute("href", "https://www.google.com/");