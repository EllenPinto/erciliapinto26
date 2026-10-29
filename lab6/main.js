// A. declaração de variáveis
const nodeInputNumero = document.querySelector("#colecao + section form input[type='number']");
const nodeInputSubmit = document.querySelector("#colecao + section form input[type='submit']");
const nodeUlColecao = document.querySelector("#colecao ul");
const nodeSpanTotal = document.querySelector("#colecao h3 span");
const form = document.querySelector("#colecao + section form");

const nodeUlRepetidos = document.querySelector("#repetidos ul");
const nodeSpanTotalRepetidos = document.querySelector("#repetidos h3 span");

const colecao = [];
const repetidos = [];
let totalRepetidos = 0;

// B. event handlers
function guardaCarta() {
    const numero = Number(nodeInputNumero.value);

    if (colecao.includes(numero)) {
        repetidos.push(numero);
        repetidos.sort((a, b) => a - b);
        totalRepetidos++;

        atualizaRepetidos();
    } else {
        colecao.push(numero);
        colecao.sort((a, b) => a - b);

        atualizaLista(colecao, nodeUlColecao);
        nodeSpanTotal.textContent = colecao.length;
    }

    guardaDados(); // NOVO

    nodeInputNumero.value = "";
    nodeInputNumero.focus();
}

function atualizaLista(lista, nodeUl) {
    nodeUl.innerHTML = "";

    lista.forEach((numero) => {
        const nodeLi = document.createElement("li");

        if (nodeUl === nodeUlRepetidos) {
            nodeLi.innerHTML = `${numero} <button type="button">Eliminar</button>`;
        } else {
            nodeLi.textContent = numero;
        }

        nodeUl.appendChild(nodeLi);
    });
}

function eliminaRepetido(indice) {
    repetidos.splice(indice, 1);
    totalRepetidos--;

    atualizaRepetidos();
    guardaDados(); // NOVO
}

function atualizaRepetidos() {
    atualizaLista(repetidos, nodeUlRepetidos);
    nodeSpanTotalRepetidos.textContent = totalRepetidos;
    associaBotoesEliminar();
}

// NOVO: guarda as duas listas no localStorage (só aceita texto, por isso JSON.stringify)
function guardaDados() {
    localStorage.setItem("colecao", JSON.stringify(colecao));
    localStorage.setItem("repetidos", JSON.stringify(repetidos));
}

// NOVO: lê as listas guardadas e repõe-nas nas variáveis
function carregaDados() {
    const colecaoGuardada = JSON.parse(localStorage.getItem("colecao")) ?? [];
    const repetidosGuardados = JSON.parse(localStorage.getItem("repetidos")) ?? [];

    colecao.push(...colecaoGuardada);
    repetidos.push(...repetidosGuardados);
    totalRepetidos = repetidos.length;

    atualizaLista(colecao, nodeUlColecao);
    nodeSpanTotal.textContent = colecao.length;
    atualizaRepetidos();
}

// C. event listeners
form.onsubmit = (event) => {
    event.preventDefault();
    guardaCarta();
};

function associaBotoesEliminar() {
    const botoesEliminar = document.querySelectorAll("#repetidos ul button");

    botoesEliminar.forEach((botao, indice) => {
        botao.onclick = () => {
            eliminaRepetido(indice);
        };
    });
}

// NOVO: ao abrir a página, carrega os dados guardados
carregaDados();
