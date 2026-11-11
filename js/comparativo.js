const itens = ["potencia", "torque", "marchas"];

const btnDestacar = document.getElementById("btnDestacar");
btnDestacar.addEventListener("click", destacarMelhores);

function destacarMelhores() {
    console.log("Destacando os melhores valores");

    for (let i = 0; i < itens.length; i++) {
        const celulaRaptor = document.getElementById(itens[i] + "Raptor");
        const celulaHilux = document.getElementById(itens[i] + "Hilux");
        const valorRaptor = Number(celulaRaptor.textContent);
        const valorHilux = Number(celulaHilux.textContent);

        if (valorRaptor > valorHilux) {
            celulaRaptor.classList.toggle("table-success");
        } else {
            celulaHilux.classList.toggle("table-success");
        }
    }

    if (btnDestacar.textContent == "Destacar o melhor valor") {
        btnDestacar.textContent = "Limpar destaque";
    } else {
        btnDestacar.textContent = "Destacar o melhor valor";
    }
}
