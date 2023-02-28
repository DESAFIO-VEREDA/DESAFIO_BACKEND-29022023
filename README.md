# DESAFIO_BACKEND-29022023

**PARTE 1**

Construa uma API, que responda JSON, para conversão monetária. Ela deve ter uma moeda de lastro (USD) e fazer conversões entre diferentes moedas com cotações de verdade e atuais.

A API precisa converter entre as seguintes moedas:

USD
BRL
EUR
BTC
ETH

A requisição deve receber como parâmetros: A moeda de origem, o valor a ser convertido e a moeda final.

Ex: ?from=BTC&to=EUR&amount=123.45

A API deve suportar conversão entre moedas fiduciárias e crypto . Exemplo: BRL->BTC, USD->ETH, USD->BRL

Ref: Wikipedia [Site Institucional]. Disponível em: https://pt.wikipedia.org/wiki/Moeda. 

Você deve usar como linguagem de programação para o desafio:

JavaScript / Typescript (NodeJS)

A API precisa contemplar cotações de verdade e atuais através de integração com APIs públicas de cotação de moedas:

Ex: https://docs.awesomeapi.com.br/api-de-moedas

**PARTE 2**

Crie 3 moedas fictícias com lastro no dólar (USD) em um arquivo JSON dentro do projeto, permitindo que a rota também faça conversão com essas moedas:

{
  "name": "Dólar Americano/Moeda Vereda",
  "bid": "22.56"
  "code": "VRD"
},<br>
{
  "name": "Dólar Americano/GTA Coin",
  "bid": "15000.24"
  "code": "GTA"
},<br>
{
  "name": "Dólar Americano/Dungeons & Dragons Coin",
  "bid": "0.005"
  "code": "DAD"
}
