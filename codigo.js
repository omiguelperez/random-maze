'use strict';

const canvas = document.getElementById('canvas');
const lienzo = canvas.getContext('2d');

let laberinto = maze(5, 4);
let respuesta = display(laberinto);

let filas = respuesta.length;
let columnas = respuesta[0].length;

let imagen;

canvas.width = columnas * 50;
canvas.height = filas * 50;

for (var i = 0; i < filas; i++) {
  for (var j = 0; j < columnas; j++) {
    imagen = new Image();
    if (respuesta[i][j] == true) {
      imagen.src = 'img/diana-atras.png';
    } else {
      imagen.src = 'img/liz.png';
    }
    imagen.onload = function () {
      
    };
  }
}
