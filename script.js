function ajustarTamanhoTela() {
    const largura = window.innerWidth;
    if (largura < 768) {
        document.body.style.fontSize = "14px"; // Menor tamanho de fonte em telas pequenas
    } else {
        document.body.style.fontSize = "16px";
    }
}




function adicionarAnimacao() {
    const corpo = document.querySelector('body');
    corpo.classList.add('animacao-pagina');
    setTimeout(() => corpo.classList.remove('animacao-pagina'), 1000);
}
// Definir limites de jogadores por formação
const limitePosicoes = {
    '4:3:3': {
        goleiro: 1,
        defensor: 2,
        lateral: 2,
        meioCampista: 3,
        atacante: 3
    },
    '4:4:2': {
        goleiro: 1,
        defensor: 2,
        lateral: 2,
        meioCampista: 4,
        atacante: 2
    },
    '4:5:1': {
        goleiro: 1,
        defensor: 2,
        lateral: 2,
        meioCampista: 5,
        atacante: 1
    },
    '3:5:2': {
        goleiro: 1,
        defensor: 3,
        lateral: 2,
        meioCampista: 5,
        atacante: 2
    },
    '3:4:3': {
        goleiro: 1,
        defensor: 3,
        lateral: 2,
        meioCampista: 4,
        atacante: 3
    }
};

let timeMontado = {
    goleiro: [],
    defensor: [],
    lateral: [],
    meioCampista: [],
    atacante: []
};

// Resetar o time montado
document.getElementById('formacao').addEventListener('change', function() {
    // Limpar as seleções anteriores
    timeMontado = {
        goleiro: [],
        defensor: [],
        lateral: [],
        meioCampista: [],
        atacante: []
    };

    document.getElementById('time-montado').innerHTML = ''; // Limpar a visualização anterior
});

// Adicionar jogadores ao time montado
document.querySelectorAll('.opcao-jogador').forEach(item => {
    item.addEventListener('click', () => {
        const posicao = item.getAttribute('data-posicao');
        const formacaoSelecionada = document.getElementById('formacao').value;
        const limite = limitePosicoes[formacaoSelecionada][posicao];

        if (timeMontado[posicao].length < limite) {
            timeMontado[posicao].push(item.textContent);
            item.style.backgroundColor = 'lightgreen'; // Marca como selecionado
        } else {
            alert('Limite de jogadores para essa posição atingido!');
        }
    });
});

// Exibir o time montado
document.getElementById('mostrar-time').addEventListener('click', () => {
    let timeHTML = '';
    for (let posicao in timeMontado) {
        if (timeMontado[posicao].length > 0) {
            timeHTML += `<h3>${posicao.charAt(0).toUpperCase() + posicao.slice(1)}:</h3><ul>`;
            timeMontado[posicao].forEach(jogador => {
                timeHTML += `<li>${jogador}</li>`;
            });
            timeHTML += '</ul>';
        }
    }
    document.getElementById('time-montado').innerHTML = timeHTML;
});


