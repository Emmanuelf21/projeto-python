from pydantic import BaseModel


class Produtos(BaseModel):
    id:int
    nome:str
    categoria:str
    image:str
    preco:float
    descricao:str