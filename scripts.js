let prato;
let bebida;
let sobremesa;
let num1;
let num2;
let num3;

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

    num1 = elemento.querySelector(".valor").innerHTML;
    num1 = Number(num1.slice(3).replace("," , "."));

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
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
    
    num2 = elemento.querySelector(".valor").innerHTML;
    num2 = Number(num2.slice(3).replace("," , "."));

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
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

    num3 = elemento.querySelector(".valor").innerHTML;
    num3 = Number(num3.slice(3).replace("," , "."));

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".desabilitado");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }
}

function finalizarPedido(elemento) {
    let soma = num1 + num2 + num3;
    let somaString = soma.toFixed(2);
    let nome = prompt("Digite seu nome:");
    let endereco = prompt("Digite seu endereço:");
    let frase = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${somaString}
    
    Nome: ${nome}
    Endereço: ${endereco}`;
    let encoded = encodeURIComponent(frase);
    window.open("https://wa.me/5534988919002?text=" + encoded);
}