function dividir(num){
    console.log(num)
    if(num%2===0){
        dividir(num/2)

    }else {
        return num
    }
}

// dividir(33456)

// Primeira -> Segunda -> Terceira -> Quarta

function factorial(num){
    console.log(`Número: ${num}`)
    if(num === 0){
        return 1
    } else if (num === 1){
        return 1
    } else {
        console.log(`${num} * ${num -1}!`)
        return num *factorial(num-1)
    }
}

console.log(factorial(100))