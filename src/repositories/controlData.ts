import fs from 'fs';

export type Podcast = {
    id: string
    nome: string
    episodio: string
    canal: string
    data: string
    duracao: string
    descricao: string
    tags: string[]
}

const pathDirector = "src/repositories/dataExample.json"

export const podCastsServing = async (epName?: string): Promise<Podcast[]> => {
    try {
        const rawData = fs.readFileSync(pathDirector, "utf-8")
        const parsedData: Podcast[] = JSON.parse(rawData)

        if (!epName) {
            return parsedData
        }

        const filtered = parsedData.filter(p => p.nome === epName)
        return filtered
    } catch (err) {
        console.error(err)
        return []
    }
}