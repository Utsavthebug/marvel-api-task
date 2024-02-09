import MarvelAPi from ".."
import { hashStringHelper } from "../../utils/helpers"

interface MarvelcharactersFetchType{
     limit:number;
     offset:number;
     comics:string;
     series:string;
     stories:string;
}

export const getMarvelCharacters = async({limit=20,offset=0,comics,series,stories}: Partial<MarvelcharactersFetchType>)=>{
    try {
        const hashString = hashStringHelper()
        const URL = `/characters?orderBy=name&offset=${offset}&limit=${limit}&${hashString}` +
        `${stories ? `&stories=${stories}` : ''}` +
        `${comics ? `&comics=${comics}` : ''}` +
        `${series ? `&series=${series}` : ''}`;
        // const URL = `/characters?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&limit=20&orderBy=name&offset=${offset}&hash=${hash}`
        const characters = await MarvelAPi.get(URL)
        return characters
        
    } catch (error) {
        console.log(error)
    }
}


// export const getMarvelCharacters = async(offset:number=0,comics?:string,series?:string)=>{
//     try {
//         const hashString = hashStringHelper()
//         const URL = `/characters?orderBy=name&offset=${offset}&limit=20&${hashString}${comics && `&comics=${comics}`}`
//         // const URL = `/characters?ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&limit=20&orderBy=name&offset=${offset}&hash=${hash}`
//         const characters = await MarvelAPi.get(URL)
//         return characters
        
//     } catch (error) {
//         console.log(error)
//     }
// }

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



