import * as http from 'http'
import { listAllPodCast } from './controllers/controler'

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

    const baseURL = req.url?.split("?")[0]

    if(req.method === "GET"){
        switch (req.url) {
            case "/api":
                console.log("testado")
                break;
            default:
                listAllPodCast(req, res)
                break;
        }
    }

})

server.listen(3000, () => {
    console.log("🚀 API is running at port 3000 ")
})