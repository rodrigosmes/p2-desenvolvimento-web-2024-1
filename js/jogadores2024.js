const buttonsData = [
        { text: 'Masculino', url: 'https://botafogo-atletas.mange.li/2024-1/masculino' },
        { text: 'Feminino', url: 'https://botafogo-atletas.mange.li/2024-1/feminino' },
        { text: 'Elenco Geral', url: 'https://botafogo-atletas.mange.li/2024-1/all' },
        { text: 'Sair', action: () => {
            sessionStorage.removeItem('logado');
            window.location.href = 'index.html';
        }}
];

let listaJogadores =[];

async function loadPlayerData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
        }
        listaJogadores = await response.json();
        renderPlayerList(listaJogadores);
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        renderPlayerList([]);
    }
}

const cards = document.getElementById("cards")

function initializePage() {
    const btnsContainer = document.getElementById('buttongroup');
    buttonsData.forEach(btnData => {
        const button = document.createElement('button');
        button.className = 'menu-btn';
        button.innerText = btnData.text;
        button.addEventListener('click', () => {
            if (btnData.url) {
            loadPlayerData(btnData.url);
            } else {
            btnData.action();
            }
        });
        btnsContainer.appendChild(button);
        });
    }
    initializePage();
    
    function renderPlayerList(players) {
        const cards = document.getElementById('myContainer');
        cards.innerHTML = '';
        players.forEach(player => {
            const card = createPlayerCard(player);
            cards.appendChild(card);
        });
    }
    

    function cardjogador(jogador, target) {
        const container = document.createElement('div');
        container.className = "container-card"        
        container.addEventListener("click",()=>{
        window.location.href = "detalhes.html?id=" + jogador.id
        })
        
        const image = document.createElement('img')
        image.src = jogador.imagem;
        image.className = "imagem"

        const nome = document.createElement('h3');
        nome.innerHTML = jogador.nome
        

        const posicao = document.createElement('h3')
        posicao.innerHTML = jogador.posicao

        const saibaMais = document.createElement("a")
        saibaMais.href = 'detalhes.html?id=' + jogador.id
        saibaMais.textContent = 'Informações Completas' 


        container.appendChild(nome);
        container.appendChild(image);
        container.appendChild(posicao);
        container.appendChild(saibaMais);        
        
        target.appendChild(container);

        return cardjogador

    }
