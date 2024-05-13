function limparConsole() {
    console.clear();
}
 
function exibirResultado(votos) {
    console.log("Resultado da Eleição:");
    for (let candidato in votos) {
        console.log(`Candidato ${candidato}: ${votos[candidato]} voto(s)`);
    }
}
 
function eleicao() {
    let votos = {
        "Candidato 1": 0,
        "Candidato 2": 0,
        "Candidato 3": 0,
        "Candidato 4": 0,
        "Nulo/Branco": 0
    };
 
    let continuarVotando = true;
 
    while (continuarVotando) {
        limparConsole();
 
        console.log("Opções de Voto:");
        console.log("1. Candidato 1");
        console.log("2. Candidato 2");
        console.log("3. Candidato 3");
        console.log("4. Candidato 4");
        console.log("5. Nulo/Branco");
        console.log("6. Encerrar Votação");
 
        let voto = parseInt(prompt("Digite o número da sua escolha:"));
 
        switch (voto) {
            case 1:
                votos["Candidato 1"]++;
                break;
            case 2:
                votos["Candidato 2"]++;
                break;
            case 3:
                votos["Candidato 3"]++;
                break;
            case 4:
                votos["Candidato 4"]++;
                break;
            case 5:
                votos["Nulo/Branco"]++;
                break;
            case 6:
                continuarVotando = false;
                break;
            default:
                console.log("Opção inválida!");
        }
    }
 
    exibirResultado(votos);
}
 
eleicao();
