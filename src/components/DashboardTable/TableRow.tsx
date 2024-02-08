import React from "react"
import { Character } from "."
import { CiWarning } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

interface TableRowProps{
    data:Character
}

const NoDescription = ()=>{
    return (
        <div className="flex items-center justify-start gap-2">
        <CiWarning size={28} color="red"/> No Description is found about this character
        </div>
    )
}




const TabeRow : React.FC<TableRowProps> = ({data}) => {
    const navigate = useNavigate()

    const handleClickRow = (id:number) =>{
        const redirect_url = `detail/${id}`
        navigate(redirect_url)
       
       }

    return (
    <tr onClick={()=>handleClickRow(data.id)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} className="w-16 md:w-32 max-w-full max-h-full" alt="Avengers Character"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {data.name}
                </td>
        
                <td className="w-1/2 px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {data.description ? data.description : <NoDescription/>}
                </td>
            </tr> 
  )
}

export default TabeRow