// import { suma, nombre } from "./matematicas.js"; //Importa las funciones indicadas en las {}
import * as moduloMatematicas from "./matematicas.js" //* importa todo el archivo matematicas.js 
import getAutor from "./literatura.js";
 const sum = moduloMatematicas.suma(10, 23)
 console.log(sum);

 console.log(moduloMatematicas.nombre);
 console.log(getAutor())