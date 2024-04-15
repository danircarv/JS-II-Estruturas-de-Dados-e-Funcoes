function calcularMedia(a,b) {
    const media = (a+b)/2
    return media
}

console.log(calcularMedia(4,6))

function criarProduto(nome,preco){
    const produto = {
        nome, // nome : nome
        preco,
        estoque: 1
    }

    return produto
}

const notebook = criarProduto("Notebook Intel", 3450)
console.log(notebook)

function areaRetangular(base,altura){
    return base*altura
}

console.log(areaRetangular(3,5))

function ola(){
    let texto = "...."
    texto = "Olá, mundo"
    return texto

}

console.log(ola())


function maioridade(idade){
    if(idade>=18){
        return "Maior"
    } else {
        return "Menor"
    }
}

console.log(maioridade(44))

console.log(maioridade(12))