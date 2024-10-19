const palavra = "Programador"
const letra = "a"
let qntVezes = 0


for (let index = 0; index < palavra.length; index++) {
  if (palavra[index].toLocaleLowerCase() === letra.toLocaleLowerCase()) {
    qntVezes++
  }
 
}
console.log(`A letra "${letra}" aparece ${qntVezes} vez(es), na palavra "${palavra}" `);

