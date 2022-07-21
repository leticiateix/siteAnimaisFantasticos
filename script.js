// Navegação por Tabs

// criando a função para a navegação por tabs
function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");

    // "if" para verificar se as classes das constantes criadas acima existe ou não

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("ativo"); // para iniciar a página já com a classe "ativo"

        // Função para ativar a classe "ativo" e remover caso já tenha
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove("ativo");
            });
            tabContent[index].classList.add("ativo");
        }

        tabMenu.forEach((li, index) => {
            li.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav(); // chamando a função

// Accordion List
function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt"); // titulo da lista
    const activeClass = "ativo";
    // para verificar se as classes existem
    if (accordionList.length) {
        // Para começar a página com uma dt aberta
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        // Criando uma função
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass); //mostra o proximo elemento do html, nesse caso o dd, e adiciona a classe
        }

        accordionList.forEach((itemLista) => {
            itemLista.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();

// Scroll suave de link interno

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href"); // getAttriute é para retornar apenas o link com # na frente
        const section = document.querySelector(href);
        const topoSection = section.offsetTop; // retorna o valor do topo da seção até o topo da página
        //window.scrollTo(0, topoSection);

        // forma alternativa de scroll suave
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // window.scrollTo({
        //     top: topoSection,
        //     behavior: "smooth", // faz com que o scroll fique suave
        //});
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });

    // método --> window.scrollTo(x, y) : serve para mover a tela no eixo x e/ou y
    // método --> window.scrollTo(options - passa propriedades)
}

initScrollSuave(); // chamando a função