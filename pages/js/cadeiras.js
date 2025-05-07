async function getData() {
    try{
        const res = await fetch("http://127.0.0.1:8000/produtos/Cadeira");
        const data = await res.json();

        const container = document.querySelector(".container-cadeiras");

        data.forEach(Cadeira => {
            container.innerHTML += `
            <div class="card flex-column">
                    <img src="../imagens/${Cadeira.imagem}" alt="">
                    <div class="flex-column">
                        <h4>${Cadeira.nome}</h4>
                        <p>${Cadeira.descricao}</p>
                        <p class="preco">R$ ${Cadeira.preco}</p>
                    </div>
                    <div class="div-btn">
                        <button id=${Cadeira.id} class="btn-card">Adicionar ao carrinho</button>
                    </div>
                </div>
            `
        });
    }catch(error){
        console.error("Erro ao buscar dados:", error);
    }
}

getData()
