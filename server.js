// Importe e crie um aplicativo Express 
const express = require('express'); 
const app = express() 

// Mensagem como resposta 
msg = "Olá mundo! Este é o Node.js em um contêiner Docker..." 

// Crie um endpoint da API 
console.log("Ouvindo na porta 3000...");

app.get('/', (req, res) => res.send(msg)); 

// Agora execute o aplicativo e inicie a escuta 
// na porta 3000 
app.listen(3000, () => { 
    console.log("aplicativo em execução na porta 3000..."); 
})