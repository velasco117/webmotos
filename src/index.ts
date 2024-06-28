import { app } from "./App";

class Server{
    async start(){
       await app.server.listen(app.server.get('port'));
       console.log('server on port', app.server.get('port'))
    }
}
const server = new Server();
server.start()


