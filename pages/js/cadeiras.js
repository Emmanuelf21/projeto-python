async function getData() {
    try{
        const res = await fetch("http://127.0.0.1:8000/produtos/Cadeiras");
        const data = await res.json();

        const container = document.querySelector(".container-cadeiras");

        data.forEach(cadeiras => {
            container.innerHTML += `
            <div class="card flex-column">
                    <img src="../imagens/${cadeiras.imagem}" alt="">
                    <div class="flex-column">
                        <h4>${cadeiras.nome}</h4>
                        <p>${cadeiras.descricao}</p>
                        <p class="preco">R$ ${cadeiras.preco}</p>
                    </div>
                    <div class="div-btn">
                        <button id=${cadeiras.id} class="btn-card">Adicionar ao carrinho</button>
                    </div>
                </div>
            `
        });
    }catch(error){
        console.error("Erro ao buscar dados:", error);
    }
}

getData()