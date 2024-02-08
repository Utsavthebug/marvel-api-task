import MarvelAPi from ".."
import { generateHash } from "../../utils/helpers"

const getMarvelCharacters = async(offset:number)=>{
    try {
        const ts = Date.now().toString()
        const hash = generateHash(ts)
        const URL = `/characters?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&limit=20?orderBy=name&offset=${offset}&hash=${hash}`
        const characters = await MarvelAPi.get(URL)
        console.log('xxx',characters)
        return characters
        
    } catch (error) {
        console.log(error)
    }
   
}

export default getMarvelCharacters