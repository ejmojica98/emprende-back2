const http = require("http")

function controladorSolicitud() {
    console.log("hola mundo!!")
}

const server= http.createServer(controladorSolicitud)
server.listen(4000)

