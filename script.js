
async function getCarrinho() {
    try{
        const res = await fetch("http://127.0.0.1:8000");
        const data = await res.json();

        const resCar = await fetch("http://127.0.0.1:8000/carrinho");
        const dataCar = await resCar.json();

        gerarCarrinho(dataCar);

        const btnsCard = document.querySelectorAll(".btn-card");
        btnsCard.forEach(btn => {
            btn.addEventListener('click', () =>{
                adicionarCarrinho(btn.getAttribute('id'), data.produtos, dataCar)
            });
        });

        const btnCancelar = document.querySelector(".btn-cancelar");
        btnCancelar.addEventListener('click', () =>{
                apagarCarrinho()
            });
    }
    catch(error){
        console.error("Erro ao buscar dados:", error);
    }
}

async function gerarCarrinho(dataCar) {
    
    const htmlCarrinho = document.querySelector("#carrinho");
    const produtosCarrinho = document.querySelector(".carrinho-produtos");
    produtosCarrinho.innerHTML = '';

    visibilidadeCarrinho(htmlCarrinho, dataCar);
    let somaPreco = 0;

    for (const produtoCar of dataCar.carrinho) {
        somaPreco += produtoCar.preco * produtoCar.qtd
        console.log(produtoCar)
        produtosCarrinho.innerHTML+=`
        <span id=${produtoCar.id} class="mini-card">
            <img src=./imagens/${produtoCar.imagem} alt="">
            <h3>${produtoCar.nome}</h3>
            <p>R$ ${produtoCar.preco}</p>
            <div class='flex'>
                <button id=${produtoCar.id} class='menos'>-</button>
                <p>${produtoCar.qtd}</p>
                <button id=${produtoCar.id} class='mais'>+</button>
            </div>
        </span>`
    }
    
    const precoTotal = document.querySelector(".carrinho-preco");
    precoTotal.innerHTML = `
    <p>R$ ${somaPreco.toFixed(2)}</p>
    <button class="btn-compra">Comprar</button>
    <button class="btn-cancelar">Cancelar</button>
    `

}

function isEmpty(dataCar) {
    if (Array.isArray(dataCar?.carrinho) && dataCar.carrinho.length > 0) {
        return false;
    }
    else{
        return true;
    }
}

async function visibilidadeCarrinho(htmlCarrinho,dataCar) {
    if(!isEmpty(dataCar) && htmlCarrinho.classList.contains('oculto'))
    {
        htmlCarrinho.classList.remove('oculto');
        htmlCarrinho.classList.add('visivel');
    }
    else if(htmlCarrinho.classList.contains('visivel'))
    {
        htmlCarrinho.classList.add('oculto');
        htmlCarrinho.classList.remove('visivel');
    }
}

async function adicionarCarrinho(id, produtos, dataCar) {
    const existeNoCarrinho = verificarCarrinho(id,dataCar);
    if(!existeNoCarrinho){
        for(const prod of produtos){
            if(prod['id']==id){
                const response = await fetch("http://127.0.0.1:8000/carrinho", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(prod)
                });

                const data = await response.json();
                console.log(data);
            }
        }
        refresh();
        // gerarCarrinho(dataCar);
    }
}

function verificarCarrinho(id, dataCar){
    const prod = dataCar.carrinho.find(prod => prod.id == id)
    if(prod){
        return true;
    }
    else{
        return false;
    }
}

async function refresh() {
    setTimeout(() => {
        window.location.reload();
    }, 10);
}

async function apagarCarrinho() {
    fetch('http://127.0.0.1:8000/carrinho', {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Carrinho deletado:', data);
      })
      .catch(error => {
        console.error('Erro ao deletar o carrinho:', error);
      });

}

getCarrinho();