let currPos = 0; // Posição atual do slide
const totalSlidesCount = document.querySelectorAll('.mrpno-slied').length; // Total de slides
const slidesContainer = document.querySelector('.mrpno-eapnr'); // Contêiner dos slides

// Função que move os slides
function pmovsEl(direction) {
    currPos += direction;

    // Garante que o índice do slide não ultrapasse os limites
    if (currPos < 0) {
        currPos = totalSlidesCount - 1;
    }
    if (currPos >= totalSlidesCount) {
        currPos = 0;
    }

    // Aplicando a transformação no contêiner dos slides
    slidesContainer.style.transform = `translateX(-${currPos * 100}%)`;
}

// Função que alterna os slides automaticamente a cada 5 segundos
function autoSwitchSlides() {
    pmovsEl(1); // Avança para o próximo slide
}

// Intervalo de 5 segundos para alternar os slides automaticamente
setInterval(autoSwitchSlides, 5000);

// Inicia o movimento automático dos slides
autoSwitchSlides();





//testes

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar'); // Barra de pesquisa
    const products = document.querySelectorAll('.product'); // Todos os produtos na página

    // Função para exibir todos os produtos ao carregar a página
    const showAllProducts = () => {
        products.forEach(product => {
            product.style.opacity = '1'; // Torna o produto visível
            product.style.visibility = 'visible'; // Torna o produto visível
            product.classList.add('show'); // Adiciona a classe de animação
        });
    };

    // Função para filtrar produtos
    const filterProducts = () => {
        const query = searchInput.value.toLowerCase(); // Converte a pesquisa para minúsculas

        products.forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toLowerCase(); // Obtém o nome do produto e converte para minúsculas

            // Verifica se o nome do produto contém a string de pesquisa
            if (productName.includes(query)) {
                product.style.opacity = '1'; // Torna o produto visível
                product.style.visibility = 'visible'; // Torna o produto visível
                product.classList.add('show'); // Adiciona a classe de animação
            } else {
                product.style.opacity = '0'; // Faz com que o produto desapareça
                product.style.visibility = 'hidden'; // Oculta o produto
                product.classList.remove('show'); // Remove a animação
            }
        });
    };

    // Adiciona um evento de digitação na barra de pesquisa para filtrar os produtos em tempo real
    searchInput.addEventListener('input', filterProducts);

    // Chama a função para exibir todos os produtos inicialmente
    showAllProducts();
});
