// EVENTOS

// addEventListener: adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que algum evento ocorrer neste elemento

// const img = document.querySelector("img");
// console.log(img); // retorna a primeira imagem do site

// elemento.addEventListener(event, callback, options)
// o terceiro parâmetro é opcional

// function callback(event) {
//     console.log(event.target);
// }

// img.addEventListener("click", callback);

// img.addEventListener("click", function() {
//     console.log("Clicou");
// });

// event.preventDefault()  // previne o comportamento padrão dos links

// forEach e Eventos
//const imgs = document.querySelectorAll("img");

//console.log(imgs);

// function imagens(event) {
//     console.log(event.target);
// }

// imgs.forEach((item, index) => {
//     item.addEventListener("click", imagens);
// });

// EXERCÍCIOS

// Previnir a ação de cada link, adicionar a classe "ativo" ao cliclar no link e remover a mesma classe dos demais links

// const links = document.querySelectorAll("a[href^='#'");

// function adicionarClasse(event) {
//     event.preventDefault();
//     links.forEach((link) => {
//         link.classList.remove("ativo");
//     });
//     event.currentTarget.classList.add("ativo");
//     console.log(event.currentTarget);
// }

// links.forEach((item) => {
//     item.addEventListener("click", adicionarClasse);
// });

// Selecionar todos os elementos do site e remover ao clicar

// const site = document.querySelectorAll("body *");

// // console.log(site);

// function elementoSite(event) {
//     console.log(event.currentTarget.remove());
// }

// site.forEach((elemento) => {
//     elemento.addEventListener("click", elementoSite);
//     // console.log(item);
// });

// Se o usuário clicar na tecla T, aumente todo o texto do site

function tecla(event) {
    console.log(event.key);
    if (event.key === "t") {
        document.documentElement.classList.toggle("textoMaior"); // o "document" é o HTML
    }
}

window.addEventListener("keydown", tecla);