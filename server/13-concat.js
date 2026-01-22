const elements = [ 1 , 1 , 2 , 2 ];
const otherElements  = [ 3 , 3 , 4 , 4 ];

const rta = elements.concat(otherElements)
const rta2 = [...elements , ...otherElements]
elements.push(...otherElements)
console.log(rta)
console.log(rta2)

