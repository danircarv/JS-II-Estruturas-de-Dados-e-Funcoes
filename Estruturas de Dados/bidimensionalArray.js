const arr =  [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][0])

const matrix = [
    ["l0, c0", "l0, c1", "l0, c2", "l0, c3"],
    ["l1, c0", "l1, c1", "l1, c2", "l1, c3"],
    ["l2, c0", "l2, c1", "l2, c2", "l2, c3"],
]

// console.table(matrix)

// matrix[0].push("Nova coluna")

// console.table(matrix)

for(let i = 0; i<matrix.length;i++){
    for(let j=0;j< matrix[i].length;j++){
        const elemento = matrix[i][j]
        console.log(`Posição (${i},${j}) Valor: ${elemento}`)
    }
}