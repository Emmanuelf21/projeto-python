from fastapi import FastAPI
import json

app = FastAPI()
pathProdutos = "./data/produtos.json"

@app.get("/")
def getProdutos():
    dadosProd = open(pathProdutos)
    data = json.loads(dadosProd.read())
    return data