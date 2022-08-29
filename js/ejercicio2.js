var palabra1 = "hola";
var palabra2 = "chau";
var frase = "";
frase = palabra1 + " mundo";
alert("Ejercicio 2")
alert("Test A\n" + palabra1 + "\n" + palabra2 + "\n" + frase);

palabra1 = "hola";
palabra2 = "chau";
frase = "";
palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";
alert("Test B\n" + palabra1 + "\n" + palabra2 + "\n" + frase);

palabra1 = "hola";
palabra2 = "chau";
frase = "";
palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;
alert("Test C\n" + palabra1 + "\n" + palabra2 + "\n" + frase);

palabra1 = "hola";
palabra2 = "chau";
frase = "";
palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";

alert("Test D\n" + palabra1 + "\n" + palabra2 + "\n" + frase);