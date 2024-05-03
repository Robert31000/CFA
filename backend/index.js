const http= require('http')

 http.createServer (function (request, response)  {
    response.write('hola mundo')
    response.end()
}).listen(3000)


console.log('corriendo en puerto 3000')