from pydantic import BaseModel

class Produto(BaseModel):
    id:int
    nome:str
    categoria:str
    imagem:str
    preco:float
    descricao:str