import { IncomingMessage, ServerResponse } from "http";
import { listPodcasts } from "../services/listEpisodes";

export const listAllPodCast = async (req: IncomingMessage, res: ServerResponse)=> {
    const response = await listPodcasts(req.url)
    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(response))
}