import MarvelAPi from ".."
import { generateHash } from "../../utils/helpers"

export const hashStringHelper = ()=>{
    const ts = Date.now().toString()
    const hash = generateHash(ts)
    const hashkeystring = `ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
    return hashkeystring
}

export const getMarvelCharacters = async(offset:number)=>{
    try {
        const hashString = hashStringHelper()
        const URL = `/characters?orderBy=name&offset=${offset}&limit=20&${hashString}`
        // const URL = `/characters?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&limit=20&orderBy=name&offset=${offset}&hash=${hash}`
        const characters = await MarvelAPi.get(URL)
        return characters
        
    } catch (error) {
        console.log(error)
    }
}

export const getMarvelCharacterDetail = async(id:string)=>{
    try {
        const hashString = hashStringHelper()
        const URL = `/characters/${id}?${hashString}`
        const characterdetail = await MarvelAPi.get(URL)
        return characterdetail
    } catch (error) {
        console.log(error,'from characters detail api')
    }
}

export const getCharactersComics = async (characterId:string,comicsCount:number)=>{
    try {
        const hashString = hashStringHelper()
        const URL = `characters/${characterId}/comics?${hashString}&limit=${comicsCount}`
        const CharactersComics = await MarvelAPi.get(URL)
        return CharactersComics
    } catch (error) {
        console.log(error,'Character comics list')
    }
}



