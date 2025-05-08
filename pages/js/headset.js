async function getData() {
    try{
        const res = await fetch("http://127.0.0.1:8000/produtos/Headset");
        const data = await res.json();

        const container = document.querySelector(".container-headset");

        data.forEach(headset => {
            container.innerHTML += `
            <div class="card flex-column">
                    <img src="../imagens/${headset.imagem}" alt="">
                    <div class="flex-column">
                        <h4>${headset.nome}</h4>
                        <p>${headset.descricao}</p>
                        <p class="preco">R$ ${headset.preco}</p>
                    </div>
                    <div class="div-btn">
                        <button id=${headset.id} class="btn-card">Adicionar ao carrinho</button>
                    </div>
                </div>
            `
        });
    }catch(error){
        console.error("Erro ao buscar dados:", error);
    }
}

getData()