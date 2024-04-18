/* ============================
      Tema claro/obscuro 
===============================*/

function ModoOscuro() {
    var body = document.body;
    var switchModo = document.getElementById("switchModo");
    var animacionLogoRuta = document.getElementById("animacionLogoRuta");
    var animacionGamingRuta = document.getElementById("animacionGamingRuta");

    // Guardar el estado del modo oscuro en el almacenamiento local
    localStorage.setItem("modoOscuroActivado", switchModo.checked);

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

// Al cargar la página, verificar y aplicar el modo oscuro si está activado en el almacenamiento local
document.addEventListener("DOMContentLoaded", function() {
  var modoOscuroActivado = localStorage.getItem("modoOscuroActivado");
  var switchModo = document.getElementById("switchModo");
  if (modoOscuroActivado === "true") {
      switchModo.checked = true;
      ModoOscuro();
  }
});

  /* ============================
        cambio de idioma 
===============================*/

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

/* ========================================
barra de navegacion desplegable (celulares) 
=========================================*/

  function toggleMenu() {
    var menu = document.getElementById("nav--menuDesplegable");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

/* ========================================
Formulario - Cantidad de Niveles del Torneo
=========================================*/

document.addEventListener('DOMContentLoaded', function() {
  var checkboxesNiveles = document.getElementsByName('checkboxNiveles');
  var divCantidadNiveles = document.getElementById('div--cantidadNiveles');

  for (var i = 0; i < checkboxesNiveles.length; i++) {
      checkboxesNiveles[i].addEventListener('change', function() {
          if (this.value === 'si' && this.checked) {
              divCantidadNiveles.style.display = 'block'; // Muestra el campo "Cuantos Niveles"
          } else {
              divCantidadNiveles.style.display = 'none'; // Oculta el campo "Cuantos Niveles"
          }
      });
  }
});



/* ================================
Para nombrar los Niveles del Torneo
==================================*/


function mostrarCamposNiveles() {
  var checkboxNiveles = document.getElementById('checkboxNiveles');
  var divCantidadNiveles = document.getElementById('div--cantidadNiveles');
  var contenedorNiveles = document.getElementById('contenedorNiveles');
  
  // Mostrar u ocultar la pregunta de cuántos niveles según la respuesta
  divCantidadNiveles.style.display = checkboxNiveles.checked ? 'block' : 'none';
  
  // Limpiar el contenedor de niveles por si ya se han agregado campos anteriores
  contenedorNiveles.innerHTML = '';
  
  // Si la respuesta es "Sí" y se selecciona una cantidad válida de niveles, mostrar los campos de nombre de niveles
  if (checkboxNiveles.checked) {
      var cantidadNiveles = parseInt(document.getElementById('select--cantidadNiveles').value);
      for (var i = 1; i <= cantidadNiveles; i++) {
          var div = document.createElement('div');
          div.innerHTML = `
              <label for="nombreNivel${i}">Nombre del Nivel ${i}:</label>
              <input type="text" id="nombreNivel${i}" name="nombreNivel${i}">
          `;
          contenedorNiveles.appendChild(div);
      }
  }
}

  /* ===============================================
Para registro de participantes en base a cuantos son
==================================================*/
function mostrarCamposParticipantes() {
  // Obtener el valor del campo que registra cuántos participantes son
  const cantidadParticipantes = parseInt(document.getElementById("input--cantidadParticipantes").value);

  // Obtener el contenedor donde se agregarán los nuevos campos de entrada
  const contenedorParticipantes = document.getElementById("contenedorParticipantes");

  // Limpiar el contenedor por si ya se han agregado campos anteriores
  contenedorParticipantes.innerHTML = '';

  // Si la cantidad de participantes es válida, agregar los campos de entrada
  if (!isNaN(cantidadParticipantes) && cantidadParticipantes > 0) {
      for (let i = 1; i <= cantidadParticipantes; i++) {
          // Crear nuevos elementos de input para el nombre y el correo de cada participante
          const div = document.createElement("div");
          div.innerHTML = `
              <label for="nombreParticipante${i}">Nombre del Participante ${i}:</label>
              <input type="text" id="nombreParticipante${i}" name="nombreParticipante${i}">
              <label for="emailParticipante${i}">Correo electrónico del Participante ${i}:</label>
              <input type="email" id="emailParticipante${i}" name="emailParticipante${i}">
          `;
          // Agregar los nuevos elementos al contenedor
          contenedorParticipantes.appendChild(div);
      }
  }
}