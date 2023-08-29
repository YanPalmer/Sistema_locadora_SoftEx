import { excluirCarroAlugado, recadastrarCarro } from "./javascript.js";

const marcaInput = document.getElementById("marca");
const anoInput = document.getElementById("ano");
const corInput = document.getElementById("cor");
const valorInput = document.getElementById("valor");
const botao = document.getElementById("botao");
const carrosCadastrados = document.getElementById("carrosCadastrados");
const carrosAlugados = document.getElementById("carrosAlugados");

botao.addEventListener("click", cadastrarCarro);

export const listaDeCarros = [];
export const listaDeCarrosAlugados = [];

function cadastrarCarro() {
    const veiculo = {
        marca: marcaInput.value,
        ano: anoInput.value,
        cor: corInput.value,
        valor: valorInput.value
    };
    listaDeCarros.push(veiculo);
    renderizarLista();
    limparInputs();
}

export function renderizarLista() {
    carrosCadastrados.innerHTML = "";
    listaDeCarros.forEach((carro, index) => {
        const ul = document.createElement("ul");
        // console.log(carro, index)
        ul.innerHTML = `
            <li>${carro.marca}</li>
            <li>${carro.ano}</li>
            <li>${carro.cor}</li>
            <li>${carro.valor}</li>
            <button class="botaoAlugar" data-index="${index}">Alugar</button>
            <button class="botaoExcluir" data-index="${index}">Excluir</button>
        `;
        carrosCadastrados.appendChild(ul);

    });
    carrosAlugados.innerHTML = "";
    listaDeCarrosAlugados.forEach((carro, index) => {
        const ul = document.createElement("ul");
        // console.log(carro, index);
        ul.innerHTML = `
        <li>${carro.marca}</li>
        <li>${carro.ano}</li>
        <li>${carro.cor}</li>
        <li>${carro.valor}</li>
        <button class="botaoRecadastrar" data-index="${index}">Recadastrar</button>
        <button class="botaoExcluir" data-index="${index}">Excluir</button>
    `;
        carrosAlugados.appendChild(ul);
    });
}

function limparInputs() {
    marcaInput.value = "";
    anoInput.value = "";
    corInput.value = "";
    valorInput.value = "";
}

carrosCadastrados.addEventListener("click", event => {
    // console.log("event", event);
    // console.log("event.target", event.target);
    // console.log("event.target.classList", event.target.classList);
    // console.log(`event.target.classList.contains("botaoExluir")`,event.target.classList.contains("botaoExcluir"));
    if (event.target.classList.contains("botaoAlugar")) {
        const index = event.target.getAttribute("data-index");
        console.log(index);
        alugarCarro(index);
    } else if (event.target.classList.contains("botaoExcluir")) {
        const index = event.target.getAttribute("data-index");
        excluirCarro(index);
    }
});

carrosAlugados.addEventListener("click", event2 => {
    console.log("event", event2);
    console.log("event.target", event2.target);
    console.log("event.target.classList", event2.target.classList);
    console.log(`event.target.classList.contains("botaoRecadastrar")`,event2.target.classList.contains("botaoRecadastrar"));
    if (event2.target.classList.contains("botaoRecadastrar")) {
        const index2 = event2.target.getAttribute("data-index");
        console.log(index2);
        recadastrarCarro(index2);
    } else if (event2.target.classList.contains("botaoExcluir")) {
        const index2 = event2.target.getAttribute("data-index");
        excluirCarroAlugado(index2);
    }
})

function excluirCarro(index) {
    listaDeCarros.splice(index, 1);
    renderizarLista();
}

function alugarCarro(index) {
    const carroAlugado = listaDeCarros[index];
    listaDeCarros.splice(index, 1);
    listaDeCarrosAlugados.push(carroAlugado);
    renderizarLista();
}


/*

const marca = document.getElementById("marca") //UNO
const ano = document.getElementById("ano"); //2000
const cor = document.getElementById("cor"); //Verde
const valor = document.getElementById("valor"); //21400
const botao = document.getElementById("botao");

const carrosCadastrados = document.getElementById("carrosCadastrados");
const carrosAlugados = document.getElementById("carrosAlugados");

botao.addEventListener("click", cadastrarCarro);

const listaDeCarros = [];

function cadastrarCarro() {
    const marcaV = marca.value;
    const anoV = ano.value;
    const corV = cor.value;
    const valorV = valor.value;
    const veiculo = {
        marca: marcaV,
        ano: anoV,
        cor: corV,
        valor: valorV
    };
    listaDeCarros.push(veiculo);
    console.log(listaDeCarros);
    renderizarLista();
    marca.value = "";
    ano.value = "";
    cor.value = "";
    valor.value = "";
}

function renderizarLista() {
    carrosCadastrados.innerHTML = "";
    for (let i = 0; i < listaDeCarros.length; i++) {
        const carro = listaDeCarros[i];
        const ul = document.createElement("ul");

        const itemMarca = document.createElement("li");
        // <li></li>
        itemMarca.innerHTML = carro.marca;

        const itemAno = document.createElement("li");
        itemAno.innerHTML = carro.ano;

        const itemCor = document.createElement("li");
        itemCor.innerHTML = carro.cor;
        
        const itemValor = document.createElement("li");
        // <li>Uno</li>
        itemValor.innerHTML = carro.valor;

        const botaoAlugar = document.createElement("button");
        // <button></button>
        botaoAlugar.id = "botaoAlugar";
        // <button id="botaoAlugar"></button>
        botaoAlugar.innerHTML = "Alugar";

        const botaoExcluir = document.createElement("button");
        botaoExcluir.id = "botaoExcluir";
        botaoExcluir.innerHTML = "Excluir";

        ul.appendChild(itemMarca);
        ul.appendChild(itemAno);
        ul.appendChild(itemCor);
        ul.appendChild(itemValor);
        ul.appendChild(botaoAlugar);
        ul.appendChild(botaoExcluir);

        carrosCadastrados.appendChild(ul);
    }
}

/*
{   marca: 'Uno',
    ano: '2000',
    cor: 'Verde',
    valor: '20100'
},
{   marca: 'Fiat',
    ano: '4000',
    cor: 'Amarelo',
    valor: '4000'
}
*/