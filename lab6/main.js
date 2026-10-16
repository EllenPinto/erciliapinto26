// A. declaração de variáveis
const nodeInputNumero = document.querySelector('#colecao ~ section input[type="number"]');
const nodeInputSubmit = document.querySelector('#colecao ~ section input[type="submit"]');
const nodeUlColecao = document.querySelector('#colecao ul');
const nodeUlRepetidos = document.querySelector('#repetidos ul');
const form = document.querySelector('form');

const colecao = [];
const repetidos = [];

// B. event handlers
function atualizaLista(lista, nodeUl) {
    // Apaga o conteúdo do nó UL
    nodeUl.innerHTML = '';

    // Carrega o conteúdo da lista no nó UL com o método forEach
    lista.forEach((numero, index) => {
        const li = document.createElement('li');

        if (lista === repetidos) {
            // Insere a estrutura HTML em texto com o botão eliminar
            li.innerHTML = `Cromo nº ${numero} <button data-index="${index}">Eliminar</button>`;
        } else {
            li.textContent = `Cromo nº ${numero}`;
        }

        nodeUl.appendChild(li);
    });

    // C. event listeners para os botões eliminar
    if (lista === repetidos) {
        const botoesEliminar = nodeUl.querySelectorAll('button');
        botoesEliminar.forEach((botao) => {
            botao.onclick = (event) => {
                const index = event.target.getAttribute('data-index');
                repetidos.splice(index, 1);
                atualizaLista(repetidos, nodeUlRepetidos);
                atualizaContador();
            };
        });
    }

    // Atualiza o contador de cromos
    atualizaContador();
}

function atualizaContador() {
    const spanColecao = document.querySelector('#colecao h3 span');
    if (spanColecao) {
        spanColecao.textContent = colecao.length;
    }

    const spanRepetidos = document.querySelector('#repetidos h3 span');
    if (spanRepetidos) {
        spanRepetidos.textContent = repetidos.length;
    }
}

function guardaCarta() {
    // Vai buscar o valor no nodeInputNumero.value
    const valor = nodeInputNumero.value;

    if (!valor) return;

    const numero = parseInt(valor, 10);

    // Verifica se já existe na coleção
    if (colecao.includes(numero)) {
        repetidos.push(numero);
        repetidos.sort((a, b) => a - b);
        atualizaLista(repetidos, nodeUlRepetidos);
    } else {
        colecao.push(numero);
        colecao.sort((a, b) => a - b);
        atualizaLista(colecao, nodeUlColecao);
    }

    nodeInputNumero.value = '';
}

// C. event listeners
form.onsubmit = (event) => {
    event.preventDefault();
    guardaCarta();
};
