import { useEffect, useState } from "react"
import Pagination from "../Pagination"
import SearchBar from "../SearchBar"
import {getMarvelCharacters} from "../../api/MarvelCharacters"
import TableData from "./TableData"
import { debounce } from "../../utils/helpers"
import { BeatLoader } from "react-spinners"


const DATA_COUNT= 20

interface Thumbnail {
    path: string;
    extension: string;
}

interface Url {
    type: string;
    url: string;
}

interface ComicsData {
    available: number;
    collectionURI: string;
    items: any[]; // Define the structure of comics items if needed
    returned: number;
}

interface EventsData {
    available: number;
    collectionURI: string;
    items: any[]; // Define the structure of events items if needed
    returned: number;
}

interface SeriesData {
    available: number;
    collectionURI: string;
    items: any[]; // Define the structure of series items if needed
    returned: number;
}

interface StoriesData {
    available: number;
    collectionURI: string;
    items: any[]; // Define the structure of stories items if needed
    returned: number;
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    urls: Url[];
    comics: ComicsData;
    events: EventsData;
    series: SeriesData;
    stories: StoriesData;
}


interface CharacterProps {
    count:number;
    limit:number;
    offset:number;
    total:number;
    results:Array<Character>

}


const DashboardTable = () => {
  //fetching marvel api and doing pagination
  const [data,setData] = useState<CharacterProps | null>(null)
  const [search,setSearch] = useState('')
  const [offset,setOffset] = useState(0)
  const [loading,setLoading] = useState(false)

  const fetchData = async(skip:number)=>{
    try {
    setLoading(true)
    const response = await getMarvelCharacters({offset:skip,search}) 
    setData(response?.data?.data)
        
    } catch (error) {
        console.log(error)
    } finally{
     setLoading(false)
   }
   }

   const debouncedSearch = debounce(fetchData,500);

   useEffect(()=>{
    debouncedSearch(0)
   },[search])

  useEffect(()=>{ 
   fetchData(offset)
  },[offset])

 const pageCount = data?.total ? Math.ceil(data?.total/DATA_COUNT) : 0 

 //fetching search input in real time
 if(loading)
 return <BeatLoader color="#36d7b7" /> 

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {/* search bar */}
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row gap-y-5 md:space-y-0 p-4 bg-white dark:bg-gray-700">
    
    <div className="flex-1 md:flex-none ">
    <Pagination pageCount={pageCount} setOffset={setOffset} />
    </div>

    <SearchBar
        search={search}
        setSearch={setSearch}
        />        
    </div>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3 dark:text-white">
                    Name
                </th>

                <th scope="col" className="px-6 py-3 dark:text-white">
                    Description
                </th>
            </tr>
        </thead>
       <TableData
       data={data?.results ?? []}
       />
    </table>
</div>

  )
}

export default DashboardTable