//inputs
const nombresInput = document.getElementById('nombres');
const apellidosInput = document.getElementById('apellidos');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const diaInput = document.getElementById('dia');
const mesInput = document.getElementById('mes');
const añoInput = document.getElementById('año');

//results
const nombreResult = document.getElementById('nombreCompleto');
const emailResult = document.getElementById('correoElectronico');
const telefonoResult = document.getElementById('telefonoNumero');
const fechaResult = document.getElementById('fechaNacimiento');

//funcion para actualizar las opciones del select dia
function actualizarDias() {
  const diaSelect = document.getElementById('dia').value || 1; // Obtener el día seleccionado o por defecto 1
  const mesString = mesInput.value;
  const año = parseInt(añoInput.value, 10);
  let mes;

  switch (mesString) {
    case "enero":
      mes = 1;
      break;
    case "febrero":
      mes = 2;
      break;
    case "marzo":
      mes = 3;
      break;
    case "abril":
      mes = 4;
      break;
    case "mayo":
      mes = 5;
      break;
    case "junio":
      mes = 6;
      break;
    case "julio":
      mes = 7;
      break;
    case "agosto":
      mes = 8;
      break;
    case "septiembre": 
      mes = 9;
      break;
    case "octubre":
      mes = 10;
      break;
    case "noviembre":
      mes = 11;
      break;
    case "diciembre":
      mes = 12;
      break;
    default:
      break;
  }
  
  // Limpiar opciones previas
  diaInput.innerHTML = '';
  
  // Calcular el número de días en el mes seleccionado
  const diasEnMes = new Date(año, mes, 0).getDate();
  
  // Agregar las opciones de días
  for (let i = 1; i <= diasEnMes; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    diaInput.appendChild(option);
  }

  if(diaSelect<= diasEnMes){
    diaInput.value = diaSelect; // Mantener el día seleccionado si es válido
  }else{
    diaInput.value = diasEnMes; // Si no, seleccionar el primer día
  }
}

actualizarDias(); // Llamar a la función al cargar la página
setFecha(); // Inicializar la fecha al cargar la página

//funciones para actualizar los resultados de previsualización
function setNombre() {
  if(nombresInput.value || apellidosInput.value) {
    nombreResult.textContent = nombresInput.value + ' ' + apellidosInput.value;
  } else {
    nombreResult.textContent = 'Vacío';
  }
}

function setEmail() {
  emailResult.textContent = emailInput.value || 'Vacío';
}

function setTelefono() {
  telefonoResult.textContent = telefonoInput.value || 'Vacío';
}

function setFecha() {
  fechaResult.textContent = `${diaInput.value} de ${mesInput.value} de ${añoInput.value}`;
}
//funciones para manejar los eventos de cambio
nombresInput.addEventListener('input', function() {
  setNombre();
});

apellidosInput.addEventListener('input', function() {
  setNombre();
});

emailInput.addEventListener('input', function() {
  setEmail();
});

telefonoInput.addEventListener('input', function() {
  setTelefono();
});

mesInput.addEventListener('change', function() {
  actualizarDias();
  setFecha();
});

añoInput.addEventListener('input', function() {
  actualizarDias();
  setFecha();
});

diaInput.addEventListener('change', function() {
  setFecha();
});

// Manejar el evento de envío del formulario
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  alert('Información guardada correctamente');
  
  // Limpiar el formulario
  formulario.reset();
  actualizarDias(); // Actualizar los días después de limpiar el formulario

  //actualizar los resultados de previsualización
  setNombre();
  setEmail();
  setTelefono();
  setFecha();
});