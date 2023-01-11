// - Un nuevo Set con los nombres de tu familia
const familia = ["Elsa", "Daniel", "Fredy", "Hilda", "Angela"]
const familiaSet = new Set(familia);
console.log(familiaSet); 
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familiaSet.add("Angela") 
console.log(familiaSet);
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familiaSet.add("Javascript")
console.log(familiaSet);