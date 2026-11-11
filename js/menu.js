const btnMenu = document.getElementById("btnMenu");
btnMenu.addEventListener("click", abrirMenu);

function abrirMenu() {
    console.log("Abrindo ou fechando o menu");
    const menu = document.getElementById("menu");
    menu.classList.toggle("aberto");
}
