
# > Exemplo de uso do create-react-app com um Node Express Backend

## Uso

npm i nodemon -g
`` ``
Instalar dependências de servidor e cliente=> npm i  ou  npm install

`` ``
Para iniciar o servidor e o cliente ao mesmo tempo na raiz do projeto=> npm run dev 

`` ``

Executando a construção de produção no host local. 
Isso criará uma compilação de produção e o Node exibirá o 
app em http: // localhost: 5000

`` ``
NODE_ENV = desenvolvedor do npm de produção: servidor
`` ``

## Como isso funciona

A chave para usar um back-end do Express com um projeto criado com `create-react-app`é usar um ** proxy **. 
Temos uma entrada _proxy_ em `client / package.json`
`` ``
"proxy": "http: // localhost: 5000 /"
`` ``

Isso informa ao servidor de desenvolvimento Webpack para proxy de nossas solicitações de API para o servidor de API, 
já que nosso servidor Express está sendo executado em **localhost: 5000**

## Tutorial

(https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)
