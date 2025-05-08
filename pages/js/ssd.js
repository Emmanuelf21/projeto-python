async function getData() {
    try {
        const res = await fetch("http://127.0.0.1:8000/produtos/SSD");
        const data = await res.json();

        const container = document.querySelector(".container-ssd");

        data.forEach(SSD => {
            container.innerHTML += `
                <div class="card flex-column">
                    <img src="../imagens/${SSD.imagem}" alt="${SSD.nome}">
                    <div class="flex-column">
                        <h4>${SSD.nome}</h4>
                        <p>${SSD.descricao}</p>
                        <p class="preco">R$ ${SSD.preco}</p>
                    </div>
                    <div class="div-btn">
                        <button id="${SSD.id}" class="btn-card">Adicionar ao carrinho</button>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

getData();
