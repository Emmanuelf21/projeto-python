from pydantic import BaseModel

class ProdCarrinho(BaseModel):
    id:int
    nome:str
    categoria:str
    image:str
    preco:float
    descricao:str
    qtd:int