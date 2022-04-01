let prato = 0;
let bebida = 0;
let sobremesa = 0;

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

    prato = elemento.querySelector("h5").innerHTML;

    if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }
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

    bebida = elemento.querySelector("h5").innerHTML;

    if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }
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

    sobremesa = elemento.querySelector("h5").innerHTML;

    if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }
}

function finalizarPedido(elemento) {
    
}