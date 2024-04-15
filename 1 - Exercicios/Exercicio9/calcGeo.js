function areaTriangle(base, altura){
    let resultado = ((base*altura)/2).toFixed(2)
    return resultado
}

console.log(areaTriangle(1,4))

function areaRectangle(base, altura){
    return ((base*altura)).toFixed(2)
}

function areaSquare(lado){
    return (Math.pow(lado, 2)).toFixed(2)
}

function areaTrap(baseMaior,baseMenor, altura){
    return (((baseMaior + baseMenor)*altura)/2).toFixed(2)
}

function areaCircle(raio){
    return (Math.pow(raio, 2) * 3.14).toFixed(2)
}

do{
    option = parseInt(prompt(`Calculadora Geométrica
    Escolha a opção de cálculo

    1 - área do triângulo
    2 - área do retangulo
    3 - área do quadrado
    4 - área do trapézio
    5 - área do círculo
    6 - Sair`))

    switch(option){
        case 1:
            let base = parseFloat(prompt("Informe a base do triângulo:"))
            let altura = parseFloat(prompt("Informe a altura do triângulo:"))
            alert(areaTriangle(base,altura))
        break

        case 2:
            let baseR = parseFloat(prompt("Informe a base do retângulo:"))
            let alturaR = parseFloat(prompt("Informe a altura do retângulo:"))
            alert(areaRectangle(baseR,alturaR))
        break

        case 3:
            let lado = parseFloat(prompt("Informe o lado do quadrado:"))
            alert(areaSquare(lado))
        break

        case 4:
            let baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
            let baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
            let alturaT = parseFloat(prompt("Informe a altura do trapézio:"))
            alert(areaTrap(baseMaior,baseMenor,alturaT))
        break
    
        case 5:
            let raio = parseFloat(prompt("Informe o raio do quadrado:"))
            alert(areaCircle(raio))
        break

        case 6:
            alert("Finalizando o progama!")
        break

        default:
            alert("Opção Inválida!Selecione uma opção de 1-6!")
        break
        
    }
}while(option !== 6)