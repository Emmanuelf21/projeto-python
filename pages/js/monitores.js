async function getData() {
    try{
        const res =await fetch("http://127.0.0.1:8000/produtos/Monitor")
        const data =await res.json();
        console.log(data)
        const container = document.querySelector(".container-monitor");
      
              data.forEach(Monitor => {
                container.innerHTML += `
                  <div class="card flex-column">
                    <img src="../imagens/${Monitor.imagem}" alt="${Monitor.nome}">
                    <div class="flex-column">
                      <h4>${Monitor.nome}</h4>
                      <p>${Monitor.descricao}</p>
                      <p class="preco">R$ ${Monitor.preco.toFixed(2)}</p>
                    </div>
                    <div class ="div-btn">
                      <button id=${Monitor.id} class="btn-card">Adicionar ao carrinho</button>
                    </div>
                  </div>
                `;
              });
            } catch (error) {
              console.error("Erro ao buscar dados:", error);
            }
          }
getData();
