var num = 0;
var cont = 1;

do {
    let rol = prompt("Cuál es su rol?");
    rol = rol.toUpperCase();
    if (rol == "ADMIN" || rol == "RECURSOS") {
        num = 0;
    } else if (cont < 3) {
        num = 2;
        cont++;
    } else {
        window.open("../page/error.html")
    }
} while (num > 1);

cont = 1;

do {
    let clave = prompt("Cuál es su clave?");
    if (clave == "1234") {
        num = 0;
    } else if (cont < 3) {
        num = 2;
        cont++;
    } else {
        window.open("../page/error.html")
        break;
    }
} while (num > 1);

var usuario = prompt("Cuál es su nombre de usuario?")
document.getElementById("saludo").innerHTML = "Hola " + usuario.toUpperCase() + ", bienvenido/a a nuestra aplicación";
