import { useEffect, useState } from "react"
import Pagination from "../Pagination"
import SearchBar from "../SearchBar"
import getMarvelCharacters from "../../api/getMarvelCharacters"
import TabeRow from "./TableRow"
import TableData from "./TableData"

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
  const [offset,setOffset] = useState(0)

  useEffect(()=>{
   const fetchData = async()=>{
    const response = await getMarvelCharacters(offset) 
    setData(response?.data?.data)
   }
   fetchData()
  },[offset])

  console.log(data)
 const pageCount = data?.total ? Math.ceil(data?.total/DATA_COUNT) : 0 

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {/* search bar */}
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-700">
        <div>       
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <SearchBar/>
    </div>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>

                <th scope="col" className="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
       <TableData
       data={data?.results ?? []}
       />
    </table>
    <Pagination pageCount={pageCount} setOffset={setOffset} />
</div>

  )
}

export default DashboardTable