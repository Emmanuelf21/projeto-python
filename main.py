from fastapi import FastAPI
import json
from produto import Produto
from prodCarrinho import ProdCarrinho
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
pathProdutos = "./data/produtos.json"
pathCarrinho = "./data/carrinho.json"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite requisições de qualquer origem (use com cuidado em produção)
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permite todos os headers
)

@app.get("/")
def getProdutos():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return data

@app.get("/produtos/Teclados")
def getTeclados():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Teclado')
  
@app.get("/produtos/Cadeira")
def getCadeira():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Cadeira')
  
#Adicionar o get de cada categoria de produtos
@app.get("/produtos/Monitor")
def getCarrinho():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Monitor')

@app.get("/produtos/Headset")
def getCadeira():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Headset')

@app.get("/carrinho")
def getCarrinho():
    dadosCar = open(pathCarrinho)
    data = json.loads(dadosCar.read())
    return data

@app.post("/carrinho") 
def postCarrinho(): #adicionar produto no carrinho
    dadosCar = open(pathCarrinho)
    data = json.loads(dadosCar.read())


@app.put("/carrinho")
def putCarrinho(produto: ProdCarrinho): #Atualizar a quantidade (qtd)
    dadosCar = open(pathCarrinho)
    data = json.loads(dadosCar.read())
    for prod in data['carrinho']:
        if prod.id == produto.id:
            pos = data['carrinho'].index(prod)
            data['carrinho'].pop(pos)
            data['carrinho'].insert(pos, novoProd)

            f = open(pathCarrinho,'w')
            f.write(json.dumps(data))
            f.close

            return data['carrinho']
        else:
            return data['carrinho']
    #Terminar o put
    
@app.delete("/carrinho/{id}")
def deletePCar(id: int): #deletar um produto do carrinho
    dadosCar = open(pathCarrinho)
    data = json.loads(dadosCar.read())
    # Terminar o Delete
    
@app.delete("/carrinho")
def deleteCarrrinho(): #deletar o carrinho
    dadosCar = open(pathCarrinho)
    data = json.loads(dadosCar.read())
    data['carrinho'] = []
    
    f = open(pathCarrinho, 'w')
    f.write(json.dumps(data)) 
    f.close
    
    return data['carrinho']
    
def filtrar(data, categoria: str): #função para filtrar por categoria
    listaProdutos = []
    for produto in data['produtos']:
            if produto['categoria']==categoria:
                listaProdutos.append(produto)
    return listaProdutos
