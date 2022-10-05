function escopoPrincipal() {
    const horarioFuncionamento = document.querySelector('.time');
    const tituloHorarioFuncionamento = horarioFuncionamento.querySelector('h2');
    const paragrafosHorarioFuncionamento = horarioFuncionamento.querySelectorAll('p');
    function pegarHorario(){
        let horario = new Date(Date.now());
        let HorarioAtual = horario.toLocaleTimeString();
        return HorarioAtual;
    }
    
    function pegarDiaDaSemana(){
        let diaSemana = new Date().getDay();
        return transformarDiaDaSemana(diaSemana);
    };

    function transformarDiaDaSemana(dia){
        const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira',
        'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        return diasDaSemana[dia];

    }

    function definirComoEstabelecimentoAberto() {
        horarioFuncionamento.style.background = '#00FF00';
        tituloHorarioFuncionamento.style.color = 'black';
        for (let parafrafo of paragrafosHorarioFuncionamento) {
                parafrafo.style.color = 'black';
            }
    }

    function verificarEstadoDoEstabelecimento(horario, dia){
        let horarioAtual = horario;
        let diaAtual = dia;

        if (diaAtual !== 'Domingo' && horarioAtual > '17' && horarioAtual < '23') {
            definirComoEstabelecimentoAberto();
        } else if (diaAtual === 'Domingo' || diaAtual == 'Sábado' && horarioAtual > '19' && horarioAtual < '23') {
            definirComoEstabelecimentoAberto();
        } else {
            const spanAberto = document.querySelector('.aberto');
            spanAberto.style.display = 'none';
        }
    }; 
    verificarEstadoDoEstabelecimento(pegarHorario(), pegarDiaDaSemana());
};
escopoPrincipal();