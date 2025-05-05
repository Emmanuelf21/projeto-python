from fastapi import FastAPI
import json

app = FastAPI()
pathProdutos = "./data/produtos.json"

@app.get("/")
def getProdutos():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return data

@app.get("/teclados")
def getTeclados():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Teclado')

@app.get("/Cadeira")
def getCadeira():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return filtrar(data, 'Cadeiras')

def filtrar(data, categoria: str):
    listaProdutos = []
    for produto in data['produtos']:
            if produto['categoria']==categoria:
                listaProdutos.append(produto)
    return listaProdutos