from pydantic import BaseModel

class Produto(BaseModel):
    id:int
    nome:str
    categoria:str
    image:str
    preco:float
    descricao:str