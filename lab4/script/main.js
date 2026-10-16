 <script>
      // =========================================================
      // EVENTO 1: Passar o rato por cima (mouseover / mouseout)
      // =========================================================
      const titulo = document.querySelector("#titulo");

      titulo.addEventListener("mouseover", () => {
        titulo.innerText = "1. Passaste o rato por aqui!";
      });

      titulo.addEventListener("mouseout", () => {
        titulo.innerText = "1. Passa o rato por aqui!";
      });

      // =========================================================
      // EVENTO 2: Mudar a cor de fundo com botões (click)
      // =========================================================
      const mensagem = document.querySelector("#mensagem");
      const btnRed = document.querySelector("#btnRed");
      const btnGreen = document.querySelector("#btnGreen");
      const btnBlue = document.querySelector("#btnBlue");

      btnRed.addEventListener("click", () => {
        mensagem.style.color = "red";
      });

      btnGreen.addEventListener("click", () => {
        mensagem.style.color = "green";
      });

      btnBlue.addEventListener("click", () => {
        mensagem.style.color = "blue";
      });

      // =========================================================
      // EVENTO 3: Mostrar texto ao escrever (input)
      // =========================================================
      const campoTexto = document.querySelector("#campoTexto");
      const resultadoTexto = document.querySelector("#resultadoTexto");
      const seccaoInput = document.querySelector("#seccaoInput");

      const cores = ["lightyellow", "lightblue", "lightgreen"];
      let indiceCor = 0;

      campoTexto.addEventListener("input", () => {
        resultadoTexto.innerText = campoTexto.value;

        // Aplica a cor atual
        seccaoInput.style.backgroundColor = cores[indiceCor];

        // Passa para a próxima cor (0 -> 1 -> 2 -> 0 -> 1...)
        indiceCor = (indiceCor + 1) % cores.length;
      });

      // =========================================================
      // EVENTO 4: Mudar cor do texto ao selecionar no select (change)
      // =========================================================
      const selectCor = document.querySelector("#selectCor");

      selectCor.addEventListener("change", () => {
        document.body.style.color = selectCor.value;
      });

      // =========================================================
      // EVENTO 5: Incrementar contador ao clicar (click)
      // =========================================================
      const btnContar = document.querySelector("#btnContar");
      const contador = document.querySelector("#contador");
      let valor = 0;

      btnContar.addEventListener("click", () => {
        valor++;
        contador.innerText = valor;
      });
    </script>
