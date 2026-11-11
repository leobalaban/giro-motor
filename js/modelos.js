const carros = [
    { nome: "Gol", marca: "Volkswagen", categoria: "Hatch", motor: "1.0", descricao: "Hatch compacto, simples e muito conhecido no Brasil." },
    { nome: "Onix", marca: "Chevrolet", categoria: "Hatch", motor: "1.0 turbo", descricao: "Hatch compacto, pensado para o uso diário na cidade." },
    { nome: "Corolla", marca: "Toyota", categoria: "Sedan", motor: "2.0 flex", descricao: "Sedan médio, confortável para viagens e para o dia a dia." },
    { nome: "Civic", marca: "Honda", categoria: "Sedan", motor: "1.5 turbo", descricao: "Sedan médio com foco em conforto e boa dirigibilidade." },
    { nome: "Compass", marca: "Jeep", categoria: "SUV", motor: "1.3 turbo", descricao: "SUV médio, com posição de dirigir alta e bom espaço interno." },
    { nome: "Strada", marca: "Fiat", categoria: "Picape", motor: "1.3", descricao: "Picape compacta, usada tanto no trabalho quanto no lazer." },
    { nome: "Ranger Raptor", marca: "Ford", categoria: "Picape", motor: "3.0 V6 biturbo", descricao: "Picape média esportiva, preparada para fora de estrada." },
    { nome: "Hilux GR-S", marca: "Toyota", categoria: "Picape", motor: "2.8 turbodiesel", descricao: "Picape média esportiva, versão GR-Sport da Hilux." },
    { nome: "Mustang", marca: "Ford", categoria: "Esportivo", motor: "5.0 V8", descricao: "Esportivo de duas portas, famoso pelo ronco do motor V8." },
    { nome: "Camaro", marca: "Chevrolet", categoria: "Esportivo", motor: "6.2 V8", descricao: "Esportivo de duas portas, rival tradicional do Mustang." }
];

let garagem = [];

if (localStorage.getItem("garagemGiroMotor") != null) {
    garagem = JSON.parse(localStorage.getItem("garagemGiroMotor"));
}

const listaCarros = document.getElementById("listaCarros");
const filtro = document.getElementById("filtro");
const contador = document.getElementById("contador");
const avisoGaragem = document.getElementById("avisoGaragem");

filtro.addEventListener("change", mostrarCarros);

function mostrarCarros() {
    console.log("Filtrando por: " + filtro.value);
    const categoria = filtro.value;
    let total = 0;
    listaCarros.innerHTML = "";

    for (let i = 0; i < carros.length; i++) {
        if (categoria == "Todos" || carros[i].categoria == categoria) {
            let cartao = "<div class='col-sm-6 col-lg-4'>";
            cartao += "<div class='card cartao h-100'>";
            cartao += "<div class='card-body d-flex flex-column'>";
            cartao += "<span class='badge bg-danger align-self-start'>" + carros[i].categoria + "</span>";
            cartao += "<h3 class='card-title mt-2'>" + carros[i].marca + " " + carros[i].nome + "</h3>";
            cartao += "<p class='card-text'><strong>Motor:</strong> " + carros[i].motor + "</p>";
            cartao += "<p class='card-text'>" + carros[i].descricao + "</p>";
            cartao += "<button class='btn btn-danger mt-auto align-self-start' onclick='adicionarGaragem(" + i + ")'>Adicionar à garagem</button>";
            cartao += "</div></div></div>";
            listaCarros.innerHTML += cartao;
            total = total + 1;
        }
    }

    contador.textContent = total + " carro(s) encontrado(s)";
}

function adicionarGaragem(posicao) {
    console.log("Adicionando na garagem: " + carros[posicao].nome);
    const carro = {
        modelo: carros[posicao].nome,
        marca: carros[posicao].marca,
        ano: "2026"
    };
    garagem.push(carro);
    localStorage.setItem("garagemGiroMotor", JSON.stringify(garagem));
    avisoGaragem.innerHTML = carros[posicao].marca + " " + carros[posicao].nome + " foi para a sua garagem! <a href='Garagem.html'>Ver garagem</a>";
    avisoGaragem.classList.remove("oculta");
}

mostrarCarros();
