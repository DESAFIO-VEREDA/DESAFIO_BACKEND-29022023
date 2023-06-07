  const express = require('express');
  const axios = require('axios').default
    
  const app = express();
  app.use(express.json());



  app.get('/', (req, res) => {
    const {from, to, ammount} = req.query;
    axios.get(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`,{
      params: {
        from: from,
        to: to,        
      }
    }).then(function (response) {
      const {data} = response;
      const dynamicKey = Object.keys(data)[0];  
      const cotacao = data[dynamicKey].bid;
      const conversao = (Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(cotacao * ammount))
      res.status(200).json(conversao)
    }).catch((err) => {      
      res.status(403).json({message: "Cryptos não podem ser valores destino"})
    })      
    })  

  module.exports = app;