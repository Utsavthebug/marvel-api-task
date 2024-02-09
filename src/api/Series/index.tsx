import MarvelAPi from ".."
import { hashStringHelper } from "../../utils/helpers"


export const getAllSeries = async()=>{
    let offset = 0;
    let allSeries:any = []
    
    const hashString = hashStringHelper()
    let URL = `series?${hashString}&limit=100`
    
        try {
            for(let i=0;i<2;i++){
                const response = await MarvelAPi.get(URL + `&offset=${offset}`)
                const data = response.data.data
                const  series = data.results
                allSeries = allSeries.concat(series)
                offset+=series.length
            }
            return allSeries
       
        } catch (error) {
            console.log(error)
            return []
        }
        }
    