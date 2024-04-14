let pilha = []
let option

do{
    option = parseInt(prompt(`Quantidade de cartas na pilha: 
    ${pilha.length}
    1 - Adicionar uma nova carta
    2 - Puxar uma carta
    3 - Sair
    `))

    switch(option){
        case 1:
            let name = prompt("Qual o nome da carta a ser adicionada?")
            pilha.unshift(name)
            alert(`A carta ${name} foi adcionada`)
        break

        case 2:
            if (pilha.length > 0) {
                let cartaPuxada = pilha.shift();
                alert(`A carta ${cartaPuxada} foi retirada do baralho!`);
            } else {
                alert("Não há cartas no baralho!");
            }
        break

        case 3:
            alert("Finalizando o programa!")
        break

        default:
            alert("Opção Inválida!Escolha uma opção de 1 a 3!")
        break

    }

}while(option !== 3)