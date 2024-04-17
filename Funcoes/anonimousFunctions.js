olaMundo()

function olaMundo(){
    console.log("Olá, mundo!")
}

const oiMundo = function () {
    console.log("Oi, mundo")
}

oiMundo()


function somar(a,b){
    return a + b
}

const operacao = somar
// console.log(operacao(4,5))


operacao = function (a,b){
    return a-b
}

// console.log(subtrair(36,13))
