import { podCastsServing } from "../repositories/controlData";

export const listPodcasts = async (req?: String | undefined) => {
    const p = req?.split("?p=")[1]
    const podCasts = await podCastsServing(p || "")
    return podCasts
}