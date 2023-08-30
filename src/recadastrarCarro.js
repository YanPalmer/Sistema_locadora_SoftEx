import { listaDeCarros, listaDeCarrosAlugados, renderizarLista } from "./teste.js";

export function recadastrarCarro(index2) {
    const carroAlugado = listaDeCarrosAlugados[index2];
    listaDeCarrosAlugados.splice(index2, 1);
    listaDeCarros.push(carroAlugado);
    renderizarLista();
}

export function excluirCarroAlugado(index2) {
    listaDeCarrosAlugados.splice(index2, 1);
    renderizarLista();
}