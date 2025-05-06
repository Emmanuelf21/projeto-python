async function getData() {
    try{
        const res = await fetch("http://127.0.0.1:8000/produtos/Teclados");
        const data = await res.json();

        const container = document.querySelector(".container-teclados");

        data.forEach(teclado => {
            container.innerHTML += `
            <div class="card">
                    <img src="../imagens/${teclado.imagem}" alt="">
                    <div class="flex-column">
                        <h4>${teclado.nome}</h4>
                        <p>${teclado.descricao}</p>
                        <p>R$ ${teclado.preco}</p>
                    </div>
                </div>
            `
        });
    }catch(error){
        console.error("Erro ao buscar dados:", error);
    }
}

getData()