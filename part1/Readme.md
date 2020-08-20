## Teste Linx

**API de produtos** - Precisamos de uma API para receber a atualização de dados cadastrais de produtos. Ela deve receber um corpo no formato JSON, onde o tamanho varia desde alguns poucos Kb até alguns Gb.
Experiências anteriores mostram que alguns clientes costumam enviar o mesmo corpo repetidas vezes ao longo de um curto espaço de tempo.
Isso nos causou alguns problemas, como o fato de ter que escalar nossos bancos de dados muito além do necessário afim de aguentar a carga extra desnecessária.
Para evitar que isto ocorra, precisamos que esta API negue requisições que tem o mesmo corpo num intervalo de 10 minutos.

**Ferramentas utilizadas**:

 - Node.js
 - npm
 - Express
 - Nodemon
 - Date-fns
 - Mocha
 - Chai
 - MockDate
 - Postman

1. Obter cópia do repositório através do git clone 
`git clone https://github.com/LucianoGalvao/Teste-Linx`
##
2. Instalar as dependências no repositório
   `npm install express --save` - Express
   `npm install request --save-dev` - Request
   `npm install body-parser` - Body Parser
   `npm install date-fns --save `  - Date-Fns
   `npm install mocha -g --save-dev`  - Mocha
   `npm install chai --save-dev` - Chai
   `install chai-http` - Chai-Http
   `npm install mockdate` - MockDate
##
3. Para iniciar o servidor e realizar a requisição (via postman)
`npm run start`
##
4. Para rodar os testes (Com o servidor offline)
`npm test`


 

