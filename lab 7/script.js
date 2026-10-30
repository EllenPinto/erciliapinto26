// A. Estado e Variáveis
const divProdutos = document.querySelector("#produtos");
const divCesto = document.querySelector("#cesto");
const pTotal = document.querySelector("#total");

// cria a chave com lista vazia, caso ainda não exista
if (!localStorage.getItem("produtos-selecionados")) {
    localStorage.setItem("produtos-selecionados", JSON.stringify([]));
}

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
    botao.addEventListener("click", () => {
        adicionarAoCesto(produto);
    });

    article.append(titulo, imagem, preco, descricao, botao);
    return article;
}

function criaProdutoCesto(produto) {
    const article = document.createElement("article");

    const titulo = document.createElement("h2");
    titulo.textContent = produto.title;

    const imagem = document.createElement("img");
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const preco = document.createElement("p");
    preco.classList.add("preco");
    preco.textContent = "Custo total: " + produto.price + " €";

    // botão para remover
    const botao = document.createElement("button");
    botao.textContent = "- Remover do Cesto";
    botao.addEventListener("click", () => {
        removerDoCesto(produto);
    });

    article.append(titulo, imagem, preco, botao);
    return article;
}

function atualizaCesto() {
    // 1. vai buscar a lista ao localStorage
    const selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));

    // limpa o cesto antes de desenhar de novo
    divCesto.innerHTML = "";

    // 2. para cada produto, cria o article e insere-o no cesto
    selecionados.forEach((produto) => {
        divCesto.append(criaProdutoCesto(produto));
    });

    // 3. preço total
    const total = selecionados.reduce((soma, produto) => soma + produto.price, 0);
    pTotal.textContent = "Custo total: " + total.toFixed(2) + " €";
}

// C. Event handlers
function renderizarProdutos(produtos) {
    produtos.forEach((produto) => {
        divProdutos.append(criarProduto(produto));
    });
}

function adicionarAoCesto(produto) {
    const selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));
    selecionados.push(produto);
    localStorage.setItem("produtos-selecionados", JSON.stringify(selecionados));

    atualizaCesto();
}

function removerDoCesto(produto) {
    const selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));

    // encontra a posição do produto na lista...
    const indice = selecionados.findIndex((p) => p.id === produto.id);

    // ...e remove-o dessa posição
    if (indice !== -1) {
        selecionados.splice(indice, 1);
    }

    localStorage.setItem("produtos-selecionados", JSON.stringify(selecionados));

    atualizaCesto();
}

// D. Event Listeners

// E. Inicialização
renderizarProdutos(produtos);
atualizaCesto();
