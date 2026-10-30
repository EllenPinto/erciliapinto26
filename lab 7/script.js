console.log(produtos[0].description)

// 1. descrição do primeiro produto
console.log(produtos[0].description);

// 2. iterar a lista com forEach
produtos.forEach((produto) => {
    // título de cada produto
    console.log(produto.title);

    // 3. outros campos
    console.log(produto.price);
    console.log(produto.category);
    console.log(produto.rating.rate);
});
