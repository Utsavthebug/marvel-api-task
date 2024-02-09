import BarChartComponent from "../components/BarChart"
import Select from 'react-select'
import { getAllSeries } from "../api/Series"
import { getAllComics } from "../api/Comics"
import { useEffect, useState } from "react"
import { formatFunction } from "../utils/helpers"
import { getMarvelCharacters } from "../api/MarvelCharacters"
import { getAllStories } from "../api/Stories"
import type { Character } from "../components/DashboardTable"
import { useTheme } from "../store/theme-context"


export interface BarDataType{
  id: number; 
  name: string; 
  comicsCount: number;
}

//dropdown type
interface dropdownValue{
  value:string;
  label:string;
}

type dropdownType = Array<dropdownValue>


//concatenate ids by comma 
const commaSeperatedData = (newValue:any)=>{
  return newValue.map((d:any)=>d?.value).join(',')  
}

const Analytics = () => {
  const [seriesDropDown,setSeriesDropdown] = useState<dropdownType>()
  const [comicsDropdown,setcomicsDropdown] = useState<dropdownType>()
  const [storiesDropdown,setstoriesDropdown] = useState<dropdownType>()

  const [ComicId,setCommicId] = useState('')
  const [SeriesId,setSeriesId] = useState('')
  const [StoriesId,setStoriesId] = useState('')

  //All Characters formatted data for barchart
  const [charactersBarData,SetcharactersBarData] = useState<Array<BarDataType> | []>([])

  //fetching series and comics to populate dropdown
  useEffect(()=>{
    const fetchData = async ()=>{
      const [seriesresponse,comicsresponse,storiesresponse] = await Promise.all([getAllSeries(),getAllComics(),getAllStories()])
      const formattedSeriesData = formatFunction(seriesresponse)
      const formattedComicsData = formatFunction(comicsresponse)
      const formattedStoriesData = formatFunction(storiesresponse)
      setSeriesDropdown(formattedSeriesData)
      setcomicsDropdown(formattedComicsData)
      setstoriesDropdown(formattedStoriesData)
    }

  fetchData()
  },[])

  const handleComicsDropDownChange = (newValue:any)=>{
   const ComicsIds  = commaSeperatedData(newValue) 
   setCommicId(ComicsIds)
  }

  const handleSeriesDropDownChange = (newValue:any)=>{
   const SeriesId = commaSeperatedData(newValue)
   setSeriesId(SeriesId)
  } 

  const handleStoriesDropDownChange = (newValue:any)=>{
    const StoriesId = commaSeperatedData(newValue)
    setStoriesId(StoriesId)
  }

  const formatCharactersDataForBarChart = (data : Array<Character>)=>{
    return data.map((d:Character)=>({
      id:d.id,
      name:d.name,
      comicsCount:d.comics.available
    }))
  }

  useEffect(()=>{
    const fetchCharacterData = async()=>{
     const marvelCharacterresponse = await getMarvelCharacters({
        limit:15,
        comics:ComicId,
        series:SeriesId,
        stories:StoriesId
      })
      const charactersdata = marvelCharacterresponse?.data?.data?.results
      let formattedData = charactersdata.length>0 ? formatCharactersDataForBarChart(charactersdata)  : []
      SetcharactersBarData(formattedData)
    }

    fetchCharacterData()
  },[ComicId,SeriesId,StoriesId])

  //checking if dark or not
  const themeData = useTheme()
  const {theme} = themeData
  const IsDark = theme==='dark';

  return (
      <div className="w-screen h-screen px-4 py-5 flex flex-col gap-[70px]">
        {/* Filtering Characters */}
        <div className="grid w-[90%] mx-auto grid-cols-1 md:gap-7 md:grid-cols-3">
            {/* Filter by name */}
            <div className="mb-5">
            <label className="text-sm font-bold dark:text-white">Filter By Stories</label>
            <Select
              isMulti
              name="comics"
              options={storiesDropdown}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor:IsDark?'#64748b':'#f1f5f9',
                  borderColor:IsDark?'#94a3b8':'#0f172a'
                  }),
              }}
              onChange={handleStoriesDropDownChange}
            />
        </div>
           

        {/* Filter by Comics */}
        <div className="mb-5">
            <label className="text-sm font-bold dark:text-white">Filter By Comics</label>
            <Select
              isMulti
              name="comics"
              options={comicsDropdown}
              className="dark:bg-slate-500"
              onChange={handleComicsDropDownChange}
              classNamePrefix="select"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor:IsDark?'#64748b':'#f1f5f9',
                  borderColor:IsDark?'#94a3b8':'#0f172a'
                  }),
              }}
           
            />
           
        </div>

        <div className="mb-5">
            <label className="text-sm font-bold dark:text-white">Filter By Series</label>
            <Select
              isMulti
              name="series"
              options={seriesDropDown}
              classNamePrefix="select"
              className="dark:bg-slate-500"
              onChange={handleSeriesDropDownChange}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor:IsDark?'#64748b':'#f1f5f9',
                  borderColor:IsDark?'#94a3b8':'#0f172a'
                  }),
              }}
            />
            </div>      
        </div>

        <div className="mx-auto h-[60%] w-[90%]">
        <BarChartComponent
        data={charactersBarData}
        />
        </div>
      </div>
  )
}

export default Analytics