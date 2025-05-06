
async function getData() {
    try{
        const res = await fetch("http://127.0.0.1:8000/");
        const data = await res.json();

        const container = document.querySelector(".container-produtos");
        container.innerHTML = `<div class="titulo"><h2>Produtos</h2></div>`
        data.produtos.forEach(produto => {
            container.innerHTML += `
                <div class="card">
                    <img src="imagens/${produto.imagem}" alt="">
                    <div class="flex-column">
                        <h4>${produto.nome}</h4>
                        <p>${produto.descricao}</p>
                        <p>R$ ${produto.preco}</p>
                    </div>
                </div>
            `
        });
    }
    catch(error){
        console.error("Erro ao buscar dados:", error);
    }
}

getData();
