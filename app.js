const http =require('http');
////////////////////////////////////////////////
const shopServer =http.createServer((req, res) => { 
  console.log('shop server has been launched...') 
  //   process.exit()
})
shopServer.listen(5000);
