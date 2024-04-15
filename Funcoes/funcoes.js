// Introdução
function ola(){
    return console.log(`skibidi toilet`)
}

// Parâmetros
function dobro(x){
    alert(`O dobro de ${x} é ${2*x}`)
}

// dobro(5)
// dobro(9390920)

function dizerOla(nome= 'Usuário'){
    alert(`Olá, ${nome}!`)
}


// dizerOla("Benjamin")
// dizerOla()

function soma(a, b, c, d){
    alert(`Resultado da soma é ${a+b+c+d}`)
}

// soma(1.321,123.44,1,3)

function criarUsuario(nome, email, senha, tipo='admin' ){
    const usuario = {
        nome, // mesmo que nome: nome
        email, 
        senha,
        tipo
    }

    console.log(usuario)
}

// criarUsuario("DAniel", "dani@gmail.com", '1234')

function manyParameters(nome, telefone, endereço, aniversario, email, senha){
    //...
}

function objectAsParameter(usuario){
    //...
    usuario.nome
    usuario.email
}

manyParameters("nome", "telefone", "endereço", "aniversario", "email", 'senha')

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objectAsParameter(usuario)