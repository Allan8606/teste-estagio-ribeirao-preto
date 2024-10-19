// a)
const todosNumeros = []
let numA = 1

while(true){
  if (numA % 2 === 1) {
    todosNumeros.push(numA)
    numA += 2
    console.log(todosNumeros);
  }
  if (numA > 100) {
    break
   }
}

//----------------------------------------------------------
// b)
let numB = 1
const todosNumerosB= []
while(true){
  numB *= 2
  todosNumerosB.push(numB)
  console.log(todosNumerosB);
  
  if (numB > 100) {
    break
  }
}

//-----------------------------------------------------------
// c)
let numC = 0
const todosNumerosC =[]

while(true){
  
  let numeroQuadrado = Math.pow(numC, 2)
  todosNumerosC.push(numeroQuadrado)
  numC ++
  if (numeroQuadrado > 100) {
    return
  }
  console.log(todosNumerosC);
}

//---------------------------------------------------------
// d)
let numD = 2
const todosNumerosD =[]

while(true){
  
  let numeroQuadradoD = Math.pow(numD, 2)
  todosNumerosD.push(numeroQuadradoD)
  numD += 2
  if (numeroQuadradoD > 100) {
    return
  }
  console.log(todosNumerosD);
}


// ---------------------------------------------------
// e)
let numE1 = 0
let numE2 = 1
const todosNumerosE = [1]

while (true) {
  let proximoNumeroE = numE1 + numE2
  numE1 = numE2
  numE2 = proximoNumeroE
  todosNumerosE.push(proximoNumeroE)
if (proximoNumeroE > 100) {
  break
}
console.log(todosNumerosE);
}





