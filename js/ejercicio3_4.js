var edad = prompt("Ingrese su edad:");
var nombre = prompt("Ingrese su nombre:");
var apellido = prompt("Ingrese su apellido");
//alert("El nombre del usuario es " + nombre.toUpperCase());
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'El nombre del usuario es ' + nombre.toUpperCase(),
  showConfirmButton: false,
  timer: 3000,
  background: 'linear-gradient(orange, black)',
})
document.write("<p class='doc'><br>El nombre del usuario es " + nombre.toUpperCase());
document.write("<br>La edad del usuario es " + edad);