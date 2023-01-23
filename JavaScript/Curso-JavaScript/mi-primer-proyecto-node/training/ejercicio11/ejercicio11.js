// - Una clase llamada "Estudiante" que tenga:
     class Estudiante {
        nombre; 
        asignaturas; 
        constructor(nombre, asignaturas){
            this.nombre = nombre; 
            this.asignaturas = ["JavaScript", "HTML", "CSS"];
        }
       

        obtenDatos() {
            return {
                nombre: this.nombre, 
                asignaturas: this.asignaturas
            }
        }
     }

     const objEstudiante = new Estudiante("Angela", "JavaScript");
     console.log(objEstudiante.obtenDatos()) 





// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos