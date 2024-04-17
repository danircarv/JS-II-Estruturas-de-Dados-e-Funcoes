const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map

// const nomes = []
//
// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

const nomes = personagens.map((personagem) => personagem.nome)
console.log(nomes)

// Filter

// const orcs = []
//
// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc") {
//         orcs.push( personagens[i])
//     }
// }

const orcs = personagens.filter((personagem) => personagem.raca === "Orc")
console.log(orcs)

// Reduce

const nivelTotal = personagens.reduce((total, personagem) => total + personagem.nivel, 0)
console.log(nivelTotal)


const racas = personagens.reduce((total, personagem) => {
        if(total[personagem.raca]){
            total[personagem.raca].push(personagem)
        } else {
            total[personagem.raca] = [personagem]
        }
        return total
    }, {})

console.log(racas)

// Sort

const personagenOrdenadosCresc = personagens.toSorted((a, b) => a.nivel - b.nivel)// se a exp (a -b) for maior que 0 ele troca de lugar, se for menor
// const personagenOrdenadosDecresc = personagens.sort((a, b) => b.nivel - a.nivel)
console.log(personagenOrdenadosCresc)
console.log(personagens)




















