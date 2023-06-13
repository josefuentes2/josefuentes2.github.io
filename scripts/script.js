// Obtener el elemento del contador de visitas
var countElement = document.getElementById('count');

// Obtener el contador almacenado en el almacenamiento local (si existe)
var count = localStorage.getItem('visitCount');

// Verificar si el contador existe en el almacenamiento local
if (count) {
  // Convertir el contador a un número
  count = parseInt(count);
} else {
  // Si el contador no existe, establecerlo en 0
  count = 0;
}

// Incrementar el contador en 1
count++;

// Actualizar el valor del contador en el elemento HTML
countElement.textContent = count;

// Guardar el nuevo valor del contador en el almacenamiento local
localStorage.setItem('visitCount', count.toString());
