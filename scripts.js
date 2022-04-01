let prato;
let bebida;
let sobremesa;

function selecionarPrato(elemento) {
    const caixa = document.querySelector(".pratos");
    const verificadorProduto = caixa.querySelector(".borda-verde");
    const verificadorCheck = caixa.querySelector(".check");
    const icone = elemento.querySelector("ion-icon");
    if (verificadorProduto !== null) {
        verificadorProduto.classList.remove("borda-verde");
    }
    if (verificadorCheck !== null) {
        verificadorCheck.classList.remove("check");
    }
    elemento.classList.add("borda-verde");
    icone.classList.add("check");
}

function selecionarBebida(elemento) {
    const caixa = document.querySelector(".bebidas");
    const verificadorProduto = caixa.querySelector(".borda-verde");
    const verificadorCheck = caixa.querySelector(".check");
    const icone = elemento.querySelector("ion-icon");
    if (verificadorProduto !== null) {
        verificadorProduto.classList.remove("borda-verde");
    }
    if (verificadorCheck !== null) {
        verificadorCheck.classList.remove("check");
    }
    elemento.classList.add("borda-verde");
    icone.classList.add("check");
}

function selecionarSobremesa(elemento) {
    const caixa = document.querySelector(".sobremesas");
    const verificadorProduto = caixa.querySelector(".borda-verde");
    const verificadorCheck = caixa.querySelector(".check");
    const icone = elemento.querySelector("ion-icon");
    if (verificadorProduto !== null) {
        verificadorProduto.classList.remove("borda-verde");
    }
    if (verificadorCheck !== null) {
        verificadorCheck.classList.remove("check");
    }
    elemento.classList.add("borda-verde");
    icone.classList.add("check");
}






function finalizarPedido() {
    
    alert(prato);
    alert(bebida);
    alert(sobremesa);
}