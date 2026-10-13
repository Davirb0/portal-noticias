const botoes = document.querySelectorAll(".botao-curtir");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {

        const contador = botao.querySelector(".contador");

        let curtidas = Number(contador.textContent);

        curtidas++;

        contador.textContent = curtidas;

    });
});