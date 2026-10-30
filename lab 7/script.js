// A. Estado e variáveis com referência de elementos do DOM
const divProdutos = document.querySelector("#produtos"); // ajuste ao id/classe do div no seu index.html

// B. Funções utilitárias
function criarProduto(produto) {
    const article = document.createElement("article");

    const titulo = document.createElement("h2");
    titulo.textContent = produto.title;

    const imagem = document.createElement("img");
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const preco = document.createElement("p");
    preco.classList.add("preco");
    preco.textContent = "Custo total: " + produto.price + " €";

    const descricao = document.createElement("p");
    descricao.classList.add("descricao");
    descricao.textContent = produto.description;

    const botao = document.createElement("button");
    botao.textContent = "+ Adicionar ao Cesto";

    article.append(titulo, imagem, preco, descricao, botao);

    return article;
}

// C. Event handlers
function renderizarProdutos(produtos) {
    produtos.forEach((produto) => {
        // passo 2: ver o resultado na consola
        console.log(produto.title);
        console.log(produto.category);
        console.log(produto);

        // passo 4: criar o article e inseri-lo no div
        const article = criarProduto(produto);
        divProdutos.append(article);
    });
}

// D. Event Listeners

// E. Inicialização
console.log(produtos[0].description);
renderizarProdutos(produtos);
