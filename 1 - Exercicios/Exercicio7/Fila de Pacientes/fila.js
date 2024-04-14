let fila = []

do{
    let pacientes = `
    `
    for(let i = 0; i<fila.length;i++){
        pacientes +=   (i === 0) ? `${i+1}° - ${fila[i]}\n ` :  `   ${i+1}° - ${fila[i]}\n `
    }

    option = parseInt(prompt(`Fila de pacientes:
    ${pacientes}
    1 - Adicionar novo 
    2 - Consultar paciente
    3 - Sair`))

    switch(option){
        case 1:
            let nome = prompt("Digite o nome do paciente a ser adicionado:")
            fila.push(nome)
            alert(`O paciente ${nome} foi adicionado`)
        break

        case 2:
           let pacienteConsultado = fila.shift()
           alert(`Paciente ${pacienteConsultado} foi consultado.`)
        break

        case 3:
            alert(`Finalizando o progama!`)
        break

        default:
            alert(`Opção Inválida. Digite um número de 1 a 3!`)
        break
    }



}while(option != 3)