import MarvelAPi from ".."
import { hashStringHelper } from "../../utils/helpers"

export const getAllStories = async()=>{
let offset = 0;
let allStories:any = []

const hashString = hashStringHelper()
let URL = `stories?${hashString}&limit=100`

    try {
        for(let i=0;i<2;i++){
            const response = await MarvelAPi.get(URL + `&offset=${offset}`)
            const data = response.data.data
            const  stories = data.results
            allStories = allStories.concat(stories)
            offset+=stories.length
        }
        return allStories
   
    } catch (error) {
        console.log(error)
        return []
    }
    }
