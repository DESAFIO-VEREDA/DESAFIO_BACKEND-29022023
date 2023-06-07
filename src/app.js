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
    })
    .then(function (response) {
      const {data} = response;
      const inData = `${from}`+`${to}`      
      console.log(data)
    })
  } )

  module.exports = app;