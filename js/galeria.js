const fotos = document.getElementsByClassName("foto");
const visualizador = document.getElementById("visualizador");
const fotoGrande = document.getElementById("fotoGrande");
const legendaGrande = document.getElementById("legendaGrande");

for (let i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener("click", abrirFoto);
}

function abrirFoto(evento) {
    console.log("Abrindo foto");
    const foto = evento.target;
    fotoGrande.src = foto.src;
    fotoGrande.alt = foto.alt;
    legendaGrande.textContent = foto.alt;
    visualizador.classList.remove("oculta");
}

const btnFechar = document.getElementById("btnFechar");
btnFechar.addEventListener("click", fecharFoto);

function fecharFoto() {
    console.log("Fechando foto");
    visualizador.classList.add("oculta");
}
