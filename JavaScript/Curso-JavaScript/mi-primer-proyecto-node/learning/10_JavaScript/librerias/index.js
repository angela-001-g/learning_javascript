//Instalar axios para hacer llamadas a servicios externos 
import axios from "axios"; 

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("success")
    console.log(response.data); //.data para acceder a la informacion 
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR!!")
    console.log(error);
  })
  .finally(function () {
    // always executed
  });