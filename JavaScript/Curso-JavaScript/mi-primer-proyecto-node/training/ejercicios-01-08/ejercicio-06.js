// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const comprar = ["Leche", "Arroz", "Frijoles", "Carne", "Jugo", "Platano"]; 
console.log(comprar);
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
comprar.push("Aceite de Girasol"); 
console.log(comprar);
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
comprar.pop();
console.log(comprar);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: "Coraline", director: "Henry Selick", fecha:06/02/2009}, 
    {titulo: "Shrek", director: "Vicky Jenson", fecha: 22/06/2001}, 
    {titulo: "Laberinto del Fauno", director: "Guillermo del Toro", fecha: 23/02/2007},
]
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelis = peliculas.filter(valor => valor.fecha > 01/01/2001 );
console.log(pelis);
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map(valor => valor.director);
console.log(directores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(valor => valor.titulo);
console.log(titulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lista2 = directores.concat(titulos);
console.log(lista2);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newLista = [...directores, ...titulos]; 
console.log(newLista);



