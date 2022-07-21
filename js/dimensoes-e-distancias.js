// Dimensões e Distâncias

// Height e Width: são propriedades e métodos dos objetos Element e HTMLElement, a maioria são Read Only

const section = document.querySelector(".animais-lista");

section.clientHeight; // retorna o height + padding
section.offsetHeight; // retorna o height + padding + border
section.scrollHeight; // retorna height total, mesmo dentro do scroll

// console.log(section.offsetTop); // distância até o topo da página

// getBoundingClientRect(): retorna um objeto com valores de width, height, distâncias do elemento e mais

const sect = document.querySelector(".animais");

const rect = section.getBoundingClientRect();
// console.log(rect.width); // retorna a largura

// Window

window.innerWidth; // width da janela
window.outerWidth; // soma da janela + a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset;

// matchMedia(): funciona como um media-querie do css, verifica a largura do browser

// const small = window.matchMedia("(max-width: 600px");

// if (small.matches) {
//     console.log("Tela menor que 600px");
// } else {
//     console.log("Tela maior que 600px");
// }

// EXERCÍCIOS

// Distância da primeira imagem em relação ao topo da página

// const img1 = document.querySelector("img");

// const distânciaImg = img1.offsetTop;

//console.log(distânciaImg);

// Soma da largura de todas as imagens

function somaImagens() {
    const imgTotal = document.querySelectorAll("img");
    let soma = 0;
    imgTotal.forEach((item) => {
        soma += item.offsetWidth;
        //console.log(item.offsetWidth);
    });
    //console.log(soma);
}
window.onload = function() {
    somaImagens();
};

// Verificar se os links da página possuem mínimo de 48px de acordo com o google

const links = document.querySelectorAll("a");

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log("Boa acessibilidade");
    } else {
        console.log("Menor");
    }
});

// Se o browser for menor que 720px adicione uma classe

console.log(window.innerWidth);
const menu = document.querySelector(".menu");
if (window.innerWidth <= 720) {
    menu.classList.add("menu-mobile");
}

console.log(menu.classList);