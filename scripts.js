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
    num1 = Number(num1.replace("," , "."));

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
    num2 = Number(num2.replace("," , "."));

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
    num3 = Number(num3.replace("," , "."));

    if (prato && bebida && sobremesa) {
        const botaoHabilitado = document.querySelector(".botao");
        botaoHabilitado.classList.add("habilitado");
        botaoHabilitado.querySelector("h4").innerHTML = "Fazer pedido";
    }
}

function finalizarPedido() {
    
    const verif = document.querySelector(".botao").classList.contains("habilitado");
    
    if (verif) {
    const fundo = document.querySelector(".fundo-branco");
    fundo.classList.remove("escondido"); }

    let soma = num1 + num2 + num3;
    let somaString = "R$ " + soma.toFixed(2).replace("." , ",");
    let num1String = num1.toFixed(2).replace("." , ",");
    let num2String = num2.toFixed(2).replace("." , ",");
    let num3String = num3.toFixed(2).replace("." , ",");

    document.querySelector(".prato").innerHTML = prato;
    document.querySelector(".bebida").innerHTML = bebida;
    document.querySelector(".sobremesa").innerHTML = sobremesa;
    document.querySelector(".valor-prato").innerHTML = num1String;
    document.querySelector(".valor-bebida").innerHTML = num2String;
    document.querySelector(".valor-sobremesa").innerHTML = num3String;
    document.querySelector(".valor-total").innerHTML = somaString;
}

function confirmarPedido() {
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

function cancelar() {
    const fundo = document.querySelector(".fundo-branco");
    fundo.classList.add("escondido");
}