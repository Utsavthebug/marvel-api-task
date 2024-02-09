import MarvelAPi from "..";
import { hashStringHelper } from "../../utils/helpers";

export const getAllComics= async()=>{
    let offset = 0;
    let allComics:any = []
    
    const hashString = hashStringHelper()
    let URL = `comics?${hashString}&limit=100`
    
        try {
            for(let i=0;i<3;i++){
                const response = await MarvelAPi.get(URL + `&offset=${offset}`)
                const data = response.data.data
                const  comics = data.results
                allComics = allComics.concat(comics)
                offset+=comics.length
            }
            return allComics
       
        } catch (error) {
            console.log(error)
            return []
        }
        }
    