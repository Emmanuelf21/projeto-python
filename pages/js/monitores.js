async function getData() {
    try{
        const res =await fetch("http://127.0.0.1:8000/produtos/Monitor")
        const data =await res.json();

        const container = document.querySelector("container-monitor");
    
              data.forEach((monitor) => {
                container.innerHTML += `
                  <div class="card flex-column">
                    <img src="../imagens/${monitor.imagem}" alt="${monitor.nome}">
                    <div class="flex-column">
                      <h4>${monitor.nome}</h4>
                      <p>${monitor.descricao}</p>
                      <p class="preco">R$ ${monitor.preco.toFixed(2)}</p>
                    </div>
                    <div class="div-btn">
                      <button id=${monitor.id}>Adicionar ao carrinho</button>
                    </div>
                  </div>
                `;
              });
            } catch (error) {
              console.error("Erro ao buscar dados:", error);
            }
          }
getData();
