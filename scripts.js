let prato;
let bebida;
let sobremesa;
let num1 = 0;
let num2 = 0;
let num3 = 0;

function selecionarPrato(elemento) {
    const verificadorProduto = document.querySelector(".pratos").querySelector(".borda-verde");
    const verificadorCheck = document.querySelector(".pratos").querySelector(".check");

    if (verificadorProduto !== null) {
        verificadorProduto.classList.remove("borda-verde");
    }
    if (verificadorCheck !== null) {
        verificadorCheck.classList.remove("check");
    }
    elemento.classList.add("borda-verde");
    elemento.querySelector("ion-icon").classList.add("check");

    prato = elemento.querySelector("h5").innerHTML;

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }

    if (prato === "Shawarma") {
        num1 = 25.90;
    } else if (prato === "Falafel") {
        num1 = 23.90;
    } else if (prato === "Esfirra Aberta") {
        num1 = 21.90;
    } else if (prato === "Kibe Cru") {
        num1 = 20.90;
    }
}

function selecionarBebida(elemento) {
    const verificadorProduto = document.querySelector(".bebidas").querySelector(".borda-verde");
    const verificadorCheck = document.querySelector(".bebidas").querySelector(".check");
    
    if (verificadorProduto !== null) {
        verificadorProduto.classList.remove("borda-verde");
    }
    if (verificadorCheck !== null) {
        verificadorCheck.classList.remove("check");
    }
    elemento.classList.add("borda-verde");
    elemento.querySelector("ion-icon").classList.add("check");

    bebida = elemento.querySelector("h5").innerHTML;

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }

    if (bebida === "Guaraná Mineiro") {
        num2 = 6.00;
    } else if (bebida === "Suco Natural") {
        num2 = 11.00;
    } else if (bebida === "Água com gás") {
        num2 = 4.00;
    } else if (bebida === "Água sem gás") {
        num2 = 3.50;
    }
}

function selecionarSobremesa(elemento) {
    const verificadorProduto = document.querySelector(".sobremesas").querySelector(".borda-verde");
    const verificadorCheck = document.querySelector(".sobremesas").querySelector(".check");
    
    if (verificadorProduto !== null) {
        verificadorProduto.classList.remove("borda-verde");
    }
    if (verificadorCheck !== null) {
        verificadorCheck.classList.remove("check");
    }
    elemento.classList.add("borda-verde");
    elemento.querySelector("ion-icon").classList.add("check");

    sobremesa = elemento.querySelector("h5").innerHTML;

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }

    if (sobremesa === "Esfirra doce") {
        num3 = 6.90;
    } else if (sobremesa === "Banoffee") {
        num3 = 8.90;
    } else if (sobremesa === "Cheesecake") {
        num3 = 9.90;
    } else if (sobremesa === "Brigadeiro") {
        num3 = 7.90;
    }
}

function finalizarPedido(elemento) {
    let soma = num1 + num2 + num3;
    let somaString = soma.toFixed(2);
    let frase = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${somaString}`;
    let encoded = encodeURIComponent(frase);
    window.open("https://wa.me/5534988919002?text=" + encoded);
}