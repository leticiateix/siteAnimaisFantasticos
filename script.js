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