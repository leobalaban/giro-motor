const formContato = document.getElementById("formContato");
formContato.addEventListener("submit", enviarMensagem);

function enviarMensagem(evento) {
    evento.preventDefault();
    console.log("Enviando mensagem");
    const nome = document.getElementById("nome").value;
    const assunto = document.getElementById("assunto").value;
    const avisoContato = document.getElementById("avisoContato");
    avisoContato.textContent = "Obrigado, " + nome + "! Recebemos sua mensagem sobre: " + assunto + ".";
    avisoContato.classList.remove("oculta");
    formContato.reset();
}
