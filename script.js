function ModoOscuro() {
    var body = document.body;
    var switchModo = document.getElementById("switchModo");
    var animacionLogoRuta = document.getElementById("animacionLogoRuta");
    var animacionGamingRuta = document.getElementById("animacionGamingRuta");

    if (switchModo.checked) {
        body.classList.add("mode-oscuro");
        animacionLogoRuta.src = "animaciones/TorneObscuro.mp4";
        animacionGamingRuta.src = "animaciones/gamingObscuro.mp4";
    } else {
        body.classList.remove("mode-oscuro");
        animacionLogoRuta.src = "animaciones/TorneClaro.mp4";
        animacionGamingRuta.src = "animaciones/gamingClaro.mp4";
    }

    // Actualizar y reproducir el nuevo video logo
    var animacionLogo = document.getElementById("animacionLogo");
    animacionLogo.load(); // Cargar el nuevo video
    animacionLogo.play(); // Reproducir el nuevo video

    // Actualizar y reproducir el nuevo video gaming
    var animacionGaming = document.getElementById("animacionGaming");
    animacionGaming.load(); // Cargar el nuevo video
    animacionGaming.play(); // Reproducir el nuevo video
}

  

  function CambiarIdioma() {
    var botonIdioma = document.getElementById('boton-lenguaje');
    var esElements = document.querySelectorAll('.es');
    var enElements = document.querySelectorAll('.en');

    if (botonIdioma.classList.contains('es-activo')) {
        esElements.forEach(function(element) {
            element.style.display = 'none';
        });
        enElements.forEach(function(element) {
            element.style.display = 'inline';
        });
        botonIdioma.classList.remove('es-activo');
    } else {
        esElements.forEach(function(element) {
            element.style.display = 'inline';
        });
        enElements.forEach(function(element) {
            element.style.display = 'none';
        });
        botonIdioma.classList.add('es-activo');
    }
  }

  