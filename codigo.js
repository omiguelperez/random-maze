'use strict';

const out = document.getElementById('out');

let laberinto = maze(5, 4);

console.log('laberinto', laberinto);

out.innerHTML = display(laberinto);
