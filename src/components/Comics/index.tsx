import React, { useEffect, useState } from "react";
import { getCharactersComics } from "../../api/MarvelCharacters";
import ComicTag from "./ComicTag";

interface ComicsProps {
    characterId:string;
    comicsCount:number;
}

//filtering data which is in series 
const filterComics = (comicsData:any)=>{
   const filteredComics =  comicsData.filter((d:any)=>d?.series?.resourceURI.startsWith('http://gateway.marvel.com/v1/public/series'))
   const ComicsName = filteredComics.map((d:any)=>d?.series?.name)
   return ComicsName
    }

const Comics : React.FC<ComicsProps> = ({characterId,comicsCount}) => {
   const [data,setData] = useState<string[]>([])
   
    useEffect(()=>{
       const fetchData = async ()=>{
        const comicsresponse = await getCharactersComics(characterId,comicsCount)
        const ComicsName : Array<string> =  filterComics(comicsresponse?.data?.data?.results)

        //unique names 
         setData([...new Set(ComicsName)])
        
    }
    if(characterId && comicsCount){
    fetchData()
    }

    },[characterId,comicsCount])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {
            data.map((d)=><ComicTag name={d}/>)
        }
    </div>
  )
}

export default Comics