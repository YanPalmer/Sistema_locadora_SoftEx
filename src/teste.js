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


        ul.appendChild(itemMarca);
        ul.appendChild(itemAno);
        ul.appendChild(itemCor);
        ul.appendChild(itemValor);

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