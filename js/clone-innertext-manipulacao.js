// Traversing e Manipulação

// outerHTML, innerHTML, innerText: Propriedade que retornam string contendo o html ou texto
// é possível atribuir um novo valor

//const menu = document.querySelector(".menu");
//menu.innerHTML = "<h1 class='menu'>CASA QUARTO</h1>"; //Altera o texto na página, pode inserir tags e classes, no HTML, no Text, apenas texto
//console.log(menu.innerHTML);

//const h1 = document.querySelector("h1");

//h1.innerHTML = "Animais Verdes";
//console.log(h1.innerHTML);

// Transversing: navegando pelo DOM, utilizando suas propriedades e métodos

//const lista = document.querySelector(".animais-lista");
//lista.parentElement; // pai
//lista.parentElement.parentElement; // pai do pai
//lista.previousElementSibling; // elemento acima
//lista.nextElementSibling; //elemento abaixo

//lista.children; // HTMLCollection com os filhos

//console.log(lista.parentElement); // pai

//lista.querySelector("li:last-child"); // último filho

// Element vs Node

// element: representam um elemento html, ou seja, uma tag.
// node: representa um nó, e pode ser um element, texto, comentário, quebra de linha e mais.

//lista.previousElementSibling; // elemento acima
//lista.previousSibling; // node acima

//lista.firstChild; // primeiro node child

//console.log(lista.childNodes); // todos os nodes child

//const lista = document.querySelector(".animais-lista");

//const contato = document.querySelector(".contato");

//const animais = document.querySelector(".animais");

//const titulo = contato.querySelector(".titulo"); // selecionando elemento dentro de elemento

//const mapa = document.querySelector(".mapa");

//console.log(titulo);
//animais.appendChild(titulo); // movendo o titulo para o ultimo item da classe de animais (o texto)

//contato.replaceChild(mapa, titulo); // substituindo titulo pelo mapa

//contato.insertBefore(animais, mapa); // movendo animais para contato antes do mapa (mapa é filho de contato)

// Novos elementos

// criando um novo h1 na página

// const lista = document.querySelector(".animais-lista");
// const novoH1 = document.createElement("h1");

// novoH1.innerText = "Oi"; // adicionando texto
// novoH1.classList.add("titulo");

// lista.appendChild(novoH1); //adicionar no fim da lista (de animais)

// console.log(novoH1);

// CLONAR ELEMENTOS: para criar um novo elemento baseado no anterior, é necessário o método cloneNode()

// const titulo = document.querySelector("h1");
// const cloneTitulo = titulo.cloneNode(true); // clonando a classe titulo

// EXERCÍCIOS

// ----------- Clonar o .menu e adicionar em copy

// const menu = document.querySelector(".menu");

// const cloneMenu = menu.cloneNode(true);

// const copy = document.querySelector(".copy");

// copy.appendChild(cloneMenu);

// console.log(cloneMenu);

// ------------ Selecionar o primeiro DT da dl de Faq

const dl = document.querySelector(".faq-lista");
const dt = dl.querySelector("dt");

//console.log(dt.outerHTML);

const DD = dl.querySelector("dd");
//console.log(DD.innerHTML);

const faq = document.querySelectorAll(".faq");
const animais = document.querySelectorAll(".animais");

faq.c;

console.log(animais);