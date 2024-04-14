const arr = ["Frodo", "Sam", "Merry", "Pippin","Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
// Adicionar Elementos
// push - no final do array
let tamanho = arr.push("Boromir") 
console.log(arr)
console.log(tamanho)

// unshift - no começo do array
tamanho = arr.unshift('Skibidi')
console.log(arr)
console.log(arr)
console.log(tamanho)

// Remover elementos
// pop - no final do array
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift - no começo do array
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um elemento
// includes
const inclui = arr.includes('Gandalf')
console.log(inclui)

// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits); console.log(outros)

// concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)


// Substituição de Elementos
// splice - remover um grupo de elementos e substituir por outro
const elementosRemovidos = sociedade.splice(indice,1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos 
for(let i=0;i<sociedade.length;i++){
    const elemento = sociedade[i]
    console.log(`${elemento} se encontra na posição ${i}`)
}
