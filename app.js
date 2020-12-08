const http =require('http');
////////////////////////////////////////////////
const shopServer =http.createServer((req, res) => { 
  console.log('shop server has been launched...') 
})
shopServer.listen(3000);
