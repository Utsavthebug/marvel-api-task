import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMarvelCharacterDetail } from "../api/MarvelCharacters"
import Comics from "../components/Comics";
import { LazyLoadImage } from "react-lazy-load-image-component";


interface Character {
  id: number;
  name: string;
  description: string;
  modified: string; // Date string
  resourceURI: string;
  urls: CharacterURL[];
  thumbnail: CharacterImage;
  comics: CharacterSummary;
  stories: CharacterSummary;
  events: CharacterSummary;
  series: CharacterSummary;
}

interface CharacterURL {
  type: string;
  url: string;
}

interface CharacterImage {
  path: string;
  extension: string;
}

interface CharacterSummary {
  available: number;
  collectionURI: string;
  items: CharacterSummaryItem[];
  returned: number;
}

interface CharacterSummaryItem {
  resourceURI: string;
  name: string;
  type?: string; // Optional, if applicable
}

const AboutPage = () => {
  //getting params from url
  const {id} = useParams()
  const [data,setData] = useState<Character|null>(null)

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await getMarvelCharacterDetail(id!)
      const characterInfo = response?.data?.data?.results?.[0]
      setData(characterInfo)
    }

    fetchData()
  },[id])

  
  return (
      <div className="w-full h-full p-5">
      {/* Thumbnail Wrapper */}
      <div className="max-w-[1440px] h-full mx-auto flex flex-col items-center gap-4">
      <div className="flex md:items-center md:justify-center">
        <div className="w-full md:w-[450px] h-[400px]">
          <LazyLoadImage
          src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`} 
          alt="Marvel Character Image" 
          className="object-cover h-full w-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
      <div className="p-2 gap-y-4 flex flex-col h-[400px]">
      <p className="font-protest text-2xl underline">
      <span>Character Name</span>:<span>{data?.name}</span>
      </p>
      <p>
        {data?.description}
      </p>

      <p className="font-protest text-xl underline">Comics Appeared in Series</p>
      <Comics comicsCount={data?.comics.available!} characterId={id!}/>
      </div>
      </div>

      </div>
      </div>
  )
}

export default AboutPage