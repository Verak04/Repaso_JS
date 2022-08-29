var fecha = new Date();
var dia = fecha.getDay();
var mensaje;
switch (dia) {
    case 0:
        mensaje = "Es domingo de asado!!";
        break;
    case 1:
        mensaje = "Es muy Luuuunes";
        break;
    case 2:
        mensaje = "Es martes recién";
    case 3:
        mensaje = "Es mitad de semana, Miércoles";
        break
    case 4:
        mensaje = "Bien ahi! ya es Jueves";
        break
    case 5:
        mensaje = "Es viernes y tu cuerpo lo sabe";
        break
    case 6:
        mensaje = "Es sábado, joda joda";
        break
}
//swal.fire(mensaje);
Swal.fire({
    position: 'center',
    title: mensaje,
    showConfirmButton: false,
    timer: 3000,
    background: 'linear-gradient(red, black)',
    backdrop: 'url("https://sweetalert2.github.io/images/nyan-cat.gif") center top no-repeat',
    color: 'white'
})