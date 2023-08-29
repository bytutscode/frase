# frases
API simples para o retorno de uma frase com id, autor e ano

## Requerimentos
Para rodar esse projeto na sua máquina, você vai precisar de:
- Ter o NODEJS instalado na sua máquina ( para baixar as dependências e iniciar o projeto) caso não tenha : [Site do nodejs](https://nodejs.org/)
- Ter o GIT instalado na sua máquina ( para clonar o repositorio ) caso não tenha : [Site do GIT](https://git-scm.com/)

## Instalando
```
git clone https://github.com/bytutscode/frase
```
```
cd frase
```
```
npm install
```

## Inicializando o projeto 
```
npm start
```
## Funcionalidades
### Recursos
- Recebimento de frase com autor e ano

## Endpoits
```javascript
GET '/frase'
```

## como usar 

- Para usar localmente após iniciar o projeto e fazer uma requisição do tipo GET para http://localhost:4000/frase

### exemplo de resposta
```json
    "quote": {
        "frase": "O conhecimento é poder.",
        "autor": "Francis Bacon",
        "ano": 1597
    }
```
