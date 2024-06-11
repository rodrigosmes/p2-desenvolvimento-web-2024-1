const cards = document.getElementById("cards")

document.getElementById("fetchButton").addEventListener("click", async () => {
   const jogadores = await fetchData()
   jogadores.forEach(element => {
    console.log(element.id)
    cardjogador(element,cards)
   });
});



async function fetchData() {
        try {
            const res = await fetch('https://botafogo-atletas.mange.li/2024-1/all')
            jogadores = await res.json()
            
            return jogadores
        } catch (error) {
            throw Error(error)
        }
       
    }  

    function cardjogador(jogador, target) {
        const container = document.createElement('div');
        container.className = "card"        
        container.addEventListener("click",()=>{
        window.location.href = "detalhes.html?id=" + jogador.id
        })
        
        
       


        const nome = document.createElement('h1');
        nome.innerHTML = jogador.nome
        
        const imagem = document.createElement('img')
        imagem.src = jogador.imagem

        const posicao = document.createElement('h1')
        posicao.innerHTML = jogador.posicao

        
        

        container.appendChild(nome)
        container.appendChild(imagem)

        
        target.appendChild(container)

    }
