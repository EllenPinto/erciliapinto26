// A. Estado e variáveis com referência de elementos do DOM
const divProdutos = document.querySelector("#produtos");

// cria a chave com lista vazia, caso ainda não exista
if (!localStorage.getItem("produtos-selecionados")) {
    localStorage.setItem("produtos-selecionados", JSON.stringify([]));
}

// B. Funções utilitárias
const botao = document.createElement("button");
botao.textContent = "+ Adicionar ao Cesto";

// despoletado quando o botão é clicado
botao.addEventListener("click", () => {
    adicionarAoCesto(produto);
});

// C. Event handlers
function adicionarAoCesto(produto) {
    // ler
    const selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));

    // alterar
    selecionados.push(produto);

    // guardar de volta
    localStorage.setItem("produtos-selecionados", JSON.stringify(selecionados));
}
// D. Event Listeners

// E. Inicialização
console.log(produtos[0].description);
renderizarProdutos(produtos);
