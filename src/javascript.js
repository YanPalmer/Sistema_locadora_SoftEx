const input = document.getElementById("input");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", adicionar);

const listaDePessoas = [];
// "Yan"

function adicionar() {
    const pessoa = input.value;
    listaDePessoas.push(pessoa);
    renderizarLista();
}

function renderizarLista() {
    lista.innerHTML = "";
    for (let i = 0; i < listaDePessoas.length; i++) {
        const pessoa = listaDePessoas[i];
        const itemDaLista = document.createElement("li");
        // <li></li>
        itemDaLista.innerHTML = pessoa;
        // <li>Yan</li>
        lista.appendChild(itemDaLista);
        // <ol>
        //      <li>Yan</li>
        // </ol>
    }

    // listaDePessoas.forEach(element => {
        
    // });
}