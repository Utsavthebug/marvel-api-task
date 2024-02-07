import MarvelAPi from ".."
import { generateHash } from "../../utils/helpers"

const getMarvelCharacters = (offset:number)=>{
    const timeStamp = Date.now().toString()
    const hash = generateHash(timeStamp)

    const URL = `/characters/?ts=${hash}&apikey=${process.env.PUBLIC_KEY}&limit=20&offset=${offset}&hash=${hash}`
    const characters = MarvelAPi.get(URL)
    return characters
}

export default getMarvelCharacters