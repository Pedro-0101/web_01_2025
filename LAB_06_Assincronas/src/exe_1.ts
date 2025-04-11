type Tarefa = {
    descricao: string,
    prioridade: number,
    concluida: boolean
}

const tarefas : Tarefa [] = [
    { descricao: "Fazer relatorio", prioridade : 2, concluida: false},
    { descricao: "Enviar e-mail", prioridade : 3 , concluida: false},
    { descricao: "Reuniao com equipe", prioridade : 1 , concluida: false}
];

function imprimirTarefa (descricao: string, indice: number, totalTarefas: number ): void {
    console.log (`Tarefa concluida: ${descricao}`);
    console.log (`Progresso: ${indice + 1}/ ${totalTarefas}`);
}

function executarTarefas(tarefas: Tarefa[], callback: void, intervalo: number):void{

    tarefas.sort((a: Tarefa, b:Tarefa) => a.prioridade - b.prioridade);

    tarefas = tarefas.filter(tarefa => tarefa.concluida == false)
    let qtde: number = tarefas.length;

    for(let tarefa of tarefas){
        //setInterval(imprimirTarefa(tarefa.descricao, qtde, qtde), intervalo)
    }

}

//executarTarefas( tarefas, imprimirTarefa, 1500) ;