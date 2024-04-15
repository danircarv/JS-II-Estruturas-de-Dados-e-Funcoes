let cadastro = []
let imoveis = ""
do{
    for(let i = 0; i<cadastro.length;i++){
        imoveis += `  Imóvel ${i + 1} - ${cadastro[i].name}\n`
    }

    option = parseInt(prompt(`Imóveis disponíveis:
    ${imoveis}
    1 - Salvar um imóvel
    2 - Mostrar um imóvel
    3 -Sair`))

    switch(option){
        case 1:
            let nome = prompt("Nome do propietário")
            let qtdBath = prompt("Quantidade de Banheiros") 
            let qtdBed = prompt("Quantidade de Quartos")
            let garage = parseInt(prompt("Possuí garagem? \n1 - Sim \n2 - Não"))
            cadastro.push({
                name: `${nome}`,
                banheiros: `${qtdBath}`,
                quartos: `${qtdBed}`,
                garage: garage == 1 ? "Possui" : "Não possui"
            }) 
        break

        case 2:
            let indice = parseInt(prompt("Qual o número do imóvel que deseja ver?"))
            alert(`Imóvel ${indice}
            Nome do proprietário: ${cadastro[indice-1].name}
            Quantidade de Banheiros: ${cadastro[indice-1].banheiros} 
            Quantidade de Quartos: ${cadastro[indice-1].quartos} 
            Garagem: ${cadastro[indice-1].garage}`)
        break

        case 3:
            alert("Finalizando o programa!")
        break

        default:
            alert("Opção Inválida!")
        break
    


    }
    

}while(option!=3)