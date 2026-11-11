let garagem = [];

if (localStorage.getItem("garagemGiroMotor") != null) {
    garagem = JSON.parse(localStorage.getItem("garagemGiroMotor"));
}

const formGaragem = document.getElementById("formGaragem");
const corpoTabela = document.getElementById("corpoTabela");
const totalCarros = document.getElementById("totalCarros");

formGaragem.addEventListener("submit", adicionarCarro);

function adicionarCarro(evento) {
    evento.preventDefault();
    console.log("Adicionando carro na garagem");
    const carro = {
        modelo: document.getElementById("modelo").value,
        marca: document.getElementById("marca").value,
        ano: document.getElementById("ano").value
    };
    garagem.push(carro);
    salvarGaragem();
    mostrarGaragem();
    formGaragem.reset();
}

function salvarGaragem() {
    localStorage.setItem("garagemGiroMotor", JSON.stringify(garagem));
}

function removerCarro(posicao) {
    console.log("Removendo carro da posição " + posicao);
    garagem.splice(posicao, 1);
    salvarGaragem();
    mostrarGaragem();
}

const btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparGaragem);

function limparGaragem() {
    if (confirm("Remover todos os carros da garagem?")) {
        console.log("Limpando a garagem");
        garagem = [];
        localStorage.removeItem("garagemGiroMotor");
        mostrarGaragem();
    }
}

function mostrarGaragem() {
    corpoTabela.innerHTML = "";

    for (let i = 0; i < garagem.length; i++) {
        let linha = "<tr>";
        linha += "<td>" + (i + 1) + "</td>";
        linha += "<td>" + garagem[i].modelo + "</td>";
        linha += "<td>" + garagem[i].marca + "</td>";
        linha += "<td>" + garagem[i].ano + "</td>";
        linha += "<td><button class='btn btn-sm btn-outline-danger' onclick='removerCarro(" + i + ")'>Remover</button></td>";
        linha += "</tr>";
        corpoTabela.innerHTML += linha;
    }

    if (garagem.length == 0) {
        corpoTabela.innerHTML = "<tr><td colspan='5'>Sua garagem está vazia. Cadastre o primeiro carro!</td></tr>";
    }

    totalCarros.textContent = garagem.length;
}

mostrarGaragem();
