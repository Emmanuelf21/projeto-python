
async function getCarrinho() {
    try{
        const res = await fetch("http://127.0.0.1:8000");
        const data = await res.json();

        const resCar = await fetch("http://127.0.0.1:8000/carrinho");
        const dataCar = await resCar.json();
    
        const btnsCard = document.querySelectorAll(".btn-card");
        btnsCard.forEach(btn => {
            btn.addEventListener('click', () =>{
                adicionarCarrinho(btn.getAttribute('id'), data.produtos, dataCar)
            });
        });
    }
    catch(error){
        console.error("Erro ao buscar dados:", error);
    }
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
                const response = await fetch("https://127.0.0.1:8000/carrinho", {
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

getCarrinho();