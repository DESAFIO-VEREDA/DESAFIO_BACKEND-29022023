  const express = require('express');
  const axios = require('axios').default
    
  const app = express();
  app.use(express.json());



  app.get('/', (req, res) => {
    const {from, to, ammount} = req.query;
    //com essa construção no axios consigo buscar dinamicamente a cotação entre moedas
    axios.get(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`,{
      params: {
        from: from,
        to: to,        
      }
    })
    .then(function (response) {
      const {data} = response;
      //a variavel inData deveria pegar os dados From e To para criar a chave
      //do objeto dentro de data onde chegaria no valor da moeda para então
      //fazer o calculo da cotação
      const inData = `${from}`+`${to}`      
      console.log(data)
    })
  } )

  module.exports = app;