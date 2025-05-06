from fastapi import FastAPI
import json
from produto import Produto

app = FastAPI()
pathProdutos = "./data/produtos.json"
pathCarrinho = "./data/carrinho.json"

@app.get("/")
def getProdutos():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return data

@app.get("/produtos/teclados")
def getTeclados():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Teclado')
  
@app.get("/produtos/Cadeira")
def getCadeira():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Cadeiras')
  
#Adicionar o get de cada categoria de produtos
@app.get("/produtos/Monitor")
def getCarrinho():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Monitor')

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
def putCarrinho(produto: Produto): #Atualizar a quantidade (qtd)
    dadosCar = open(pathCarrinho)
    data = json.loads(dadosCar.read())
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
