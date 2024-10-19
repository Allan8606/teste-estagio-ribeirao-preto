
let numA = 0
let numB = 1
let numeroDefinido = 144

const todosNumeros = [0]

while (true) {
  let proximoNumero = numA+numB
  numA = numB
  numB = proximoNumero
  todosNumeros.push(proximoNumero)
  
if (proximoNumero === numeroDefinido) {
  break
 
}
if (proximoNumero > numeroDefinido) {
  break
}
}

if (todosNumeros.includes(numeroDefinido)) {
  console.log(`O número ${numeroDefinido} pertence a sequência `);
}else{
  console.log(`O número ${numeroDefinido} não pertence a sequência `);
}








