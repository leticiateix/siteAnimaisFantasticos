// Efeitos no DOM

// HTMLElement: todo elemento HTML herda propriedades e métodos do construtor HTMLElement

const h1 = document.querySelector("h1");
console.log(Object.prototype.toString.call(h1)); //[object HTMLHeadingElement]

// dataSet: é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap; Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos de elemento html que começarem com data-

// <div data-cor='azul' data-width='500'> Uma DIV </div>

let div = document.querySelector("div"); // ([data-cor] ou [data-cor='verde'])
console.log(div.dataset.cor); // verde

// alterando o valor de width (de 500 para 1000)

div.dataset.width = 1000;

console.log(div.dataset);

// deletando uma propriedade

delete div.dataset.width;

console.log(div.dataset);

// Data Atributes

// Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM/JS

const divs = document.querySelectorAll("[data-anima]");

divs.forEach((div) => {
    div.classList.add(div.dataset.anima);
});

/// ----------- EXERCÍCIOS

// Adicione um atributo data-anime='show-down' e data-anime='show-rigth' a todas sections com descrição dos animais