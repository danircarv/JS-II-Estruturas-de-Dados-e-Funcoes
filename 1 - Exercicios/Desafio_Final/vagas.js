let jobs = [
    {name:"Analista de Dados",description:"A vaga para analisar e tratar dados", limitDate:"28/03", candidates:[] }
]

function showJobs() {
    let jobList = ``
    for (let i = 0; i < jobs.length; i++) {
        jobList += `Índice da Vaga: ${i+1}. Nome: ${jobs[i].name}. Candidatos Inscritos: ${jobs[i].candidates.length}\n`
    }

    return alert(jobList)
}

function createJob(name, description, limitDate) {
    jobs.push({
        name,
        description,
        limitDate,
        candidates: []
    })

    return alert(`Vaga Criada`)
}

function viewJob(index){
    const candidatos = jobs[index-1].candidates.reduce((acc, current) => {acc += current + "\n"},``)

    return alert(`Índice da Vaga: ${index}.
      Nome da vaga: ${jobs[index-1].name}
      Data Limite: ${jobs[index-1].limitDate}
      Quantidade de Candidatos: ${jobs[index-1].candidates.length}
      Candidatos Inscritos: ${candidatos}`)
}

function subscribeCandidate(name,index){
    name = String(name)
    jobs[index-1].candidates.push(name)
}

function deleteJob(index){
    jobs.splice(index-1,1)
}

do{
    let size = jobs.length
    console.log(size)
    option = parseInt(prompt(`Sistema de Vagas de Emprego:
      1 - Listar Vagas de Emprego
      2 - Criar uma nova vaga
      3 - Visualizar uma vaga
      4 - Inscrever um candidato em uma vaga
      5 - Excluir uma vaga
      6 - Sair`))

    switch(option){
        case 1:
            showJobs()

            break

        case 2:
            let name = prompt("Qual o nome da vaga que será criada?")
            let description = prompt("Qual a descrição da vaga que será criada?")
            let limitDate = prompt("Qual a data limite da vaga(informe no estilo DD/MM/YY)")

            let criar = parseInt(prompt(`Deseja criar uma vaga com as seguintes informações?
            Nome: ${name}
            Descrição: ${description}
            Data Limite: ${limitDate}
            1 - Sim  2 - Não`))

            criar == 1 ? createJob(name,description,limitDate) : alert("A vaga não foi criada")

            break

        case 3:

            let indice = parseInt(prompt("Qual o indice da vaga que deseja ver?"))
            if(indice >= 1 && indice <=jobs.length){
                viewJob(indice)
            } else {
                alert("Índice inválido!")
            }

            break

        case 4:
            let candidateName = prompt("Qual o nome do candidato que será cadastrado?")
            let jobIndex = parseInt(prompt("Qual o índice da vaga?"))
            let cadastarCandidato = prompt(`Deseja cadastras o candidato ${candidateName} para a vaga ${jobs[jobIndex-1].name}?
            1 - Sim  2- Não`)
            cadastarCandidato == 1 ? subscribeCandidate(candidateName,jobIndex) : alert("Candidato não cadastrado!")
            break

        case 5:
            let indexDel = parseInt(prompt("Qual o índice da vaga a ser deletada?"))
            if(!(indexDel >= 1 && indexDel <=jobs.length)){
                alert("Vaga não encontrada!Indice invalido!")
            } else {
                let jobDeleted = parseInt(prompt(`Deseja deletar a seguinte vaga:
              Índice da Vaga: ${indexDel-1}. Nome: ${jobs[indexDel-1].name}. Candidatos Inscritos: ${jobs[indexDel-1].candidates.length}
              1 - Sim  2 - Não`))

                jobDeleted == 1 ? deleteJob(indexDel) : alert("Deleção cancelada!")
            }


            break

        case 6:
            alert("Finalizando o programa! Adeus!")
            break

        default:
            alert("Opção Inválida!")
            break


    }

}while (option !== 6)