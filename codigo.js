'use strict';

const canvas = document.getElementById('canvas');
const lienzo = canvas.getContext('2d');

let laberinto = maze(10, 9);
let respuesta = display(laberinto);

let filas = respuesta.length;
let columnas = respuesta[0].length;

canvas.width = (Math.floor(columnas/2)+1) * 50;
canvas.height = filas * 50;

let imagen;
let imagenesCargadas = 0;

let datos = [];

var personaje = {};
personaje.imagen = new Image();
personaje.imagen.src = "img/liz.png";
personaje.x = 50;
personaje.y = 0;
personaje.ok = false;
personaje.velocidad = 50;

personaje.imagen.onload = function() {
	console.log("personaje cargado");
	personaje.ok = true;
}

// cofigurando la aplicaicon para teclsa
var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
document.addEventListener("keydown", teclado);

function teclado(evento)
{
    var codigo = evento.keyCode;
    if(codigo == teclas.UP)
    {
        personaje.y -= personaje.velocidad;
    }
    if(codigo == teclas.DOWN)
    {
		console.log("fila", personaje.y/50);
		console.log("columna", personaje.x/50);
		console.log(¿);
        if (respuesta[(personaje.y+personaje.velocidad)/50][personaje.x/50] == true)
			personaje.y += personaje.velocidad;
    }
    if(codigo == teclas.LEFT)
    {
        personaje.x -= personaje.velocidad;
    }
    if(codigo == teclas.RIGHT)
    {
        personaje.x += personaje.velocidad;
    }
    dibujar(codigo);
}


// cargando las imagenes
for (var i = 0; i < filas; i++) {
	let algunasImagenes = [];
	for (var j = 0; j < columnas; j++) {
		if (j%2 == 0) {
			imagen = new Image();
			if (respuesta[i][j] == true) {
				imagen.src = 'img/cesped.png';
			} else {
				imagen.src = 'img/pared.png';
			}
			algunasImagenes[j] = {
				imagen: imagen,
				x: i * 50,
				y: j * 50
			};
			algunasImagenes[j].imagen.onload = confirmar;
		}
	}
	datos[i] = algunasImagenes;
}


function confirmar() {
	imagenesCargadas++;
	if (imagenesCargadas == (Math.floor(filas / 2) * columnas)) {
		dibujar();
	}
}

function dibujar() {
	for (var i = 0; i < filas; i++) {
		for (var j = 0; j < columnas; j+=2) {
			lienzo.drawImage(datos[i][j].imagen, datos[i][j].y/2, datos[i][j].x);
		}
	}
	dibujarPersonaje();
}

function dibujarPersonaje() {
	if (personaje.ok) {
		lienzo.drawImage(personaje.imagen, personaje.x, personaje.y);
	}
}