document.addEventListener("DOMContentLoaded", () => {
    let palabras = ["REPOSITORIO", "GITHUB", "JAVASCRIPT", "HTML", "NETBEANS", "ARMAS", "CABRERA", "ESTUCHE", "CARGADOR"];
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

      
});