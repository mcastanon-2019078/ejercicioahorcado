document.addEventListener("DOMContentLoaded", () => {
    let palabras = ["REPOSITORIO", "GITHUB", "JAVASCRIPT", "HTML", "NETBEANS", "ARMAS", "", "GALLINA", "BARCO", "CAMARA", "LENTES", "LUNA", "ROJO", "MOUSE", "TECLADO"];
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    let adElement = document.getElementById("ad");
    let horcar = document.getElementById("horcadocanva").getContext("2d");
    let palabraOculta = [];
    let letrasAdivinadas = [];
    let letrasIncorrectas = [];
    let intentosFallidos = 0;
    function actualizarPalabraOculta() {
        adElement.innerHTML = "";
        for (let i = 0; i < palabra.length; i++) {
          let span = document.createElement("span");
          span.textContent = palabraOculta[i];
          adElement.appendChild(span);
        }
      }
  
    function capturarTeclado(letra) {
      if (palabra.includes(letra)) {
        // La letra está en la palabra
        for (let i = 0; i < palabra.length; i++) {
          if (palabra[i] === letra) {
            palabraOculta[i] = letra;
            letrasAdivinadas.push(letra);
          }
        }
      } else {
        letrasIncorrectas.push(letra);
        intentosFallidos++;
        dibujarPersona(intentosFallidos);
      }
      actualizarPalabraOculta();
  
      if (palabraOculta.join("") === palabra) {
        adElement.innerHTML = "¡Ganaste! La palabra correcta es: " + palabra;
        letras.forEach((boton) => {
          boton.disabled = true;
        });
      }
      if (intentosFallidos >= 7) {
        adElement.innerHTML = "Perdiste. La palabra correcta era: " + palabra;
        letras.forEach((boton) => {
          boton.disabled = true;
        });
      }
    }
    actualizarPalabraOculta();
  
    let letras = document.querySelectorAll(".btnTe");
    letras.forEach((boton) => {
      boton.addEventListener("click", () => {
        if (!letrasAdivinadas.includes(boton.innerText) && !letrasIncorrectas.includes(boton.innerText)) {
          capturarTeclado(boton.innerText);
          boton.disabled = true; // Bloquear el botón
        }
      });
    });

    function laHorca() {
        horcar.strokeStyle = "#000";
        horcar.beginPath();
        horcar.moveTo(150, 350);
        horcar.lineTo(250, 350);
        horcar.moveTo(200, 350);
        horcar.lineTo(200, 50);
        horcar.moveTo(200, 50);
        horcar.lineTo(400, 50);
        horcar.lineWidth = 15;
        horcar.stroke();
        horcar.closePath();
      }
      laHorca();

      
      function dibujarPersona(cont) {
        horcar.strokeStyle = "red";
        switch (cont) {
          case 1:
            horcar.lineWidth = 5;
            horcar.beginPath();
            horcar.arc(400, 95, 35, 0, Math.PI * 2);
            break;
          case 2:
            horcar.lineWidth = 5;
            horcar.moveTo(400, 130);
            horcar.lineTo(400, 250);
            break;
          case 3:
            horcar.lineWidth = 5;
            horcar.moveTo(400, 140);
            horcar.lineTo(330, 190);
            break;
          case 4:
            horcar.lineWidth = 5;
            horcar.moveTo(400, 140);
            horcar.lineTo(470, 190);
            break;
          case 5:
            horcar.lineWidth = 5;
            horcar.moveTo(400, 250);
            horcar.lineTo(330, 300);
            break;
          case 6:
            horcar.lineWidth = 5;
            horcar.moveTo(400, 250);
            horcar.lineTo(470, 300);
            break;
          case 7:
            horcar.lineWidth = 5;
            // Ojo izquierdo
            horcar.moveTo(400, 90);
            horcar.lineTo(435, 110);
            // Ojo izquierdo
            horcar.moveTo(400, 110);
            horcar.lineTo(435, 90);
            break;
        }
        horcar.stroke();
        horcar.closePath();
      }
  });
  

