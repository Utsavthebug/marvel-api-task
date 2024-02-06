import { useNavigate,Link } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()
    
    const goBack = ()=>{
    //programatically going back 
    navigate('/')
    }

    return (
    <div className="flex  justify-center items-center h-full w-full bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[450px] max-h-[400px]">
            <div className="flex flex-col gap-y-5">
            <img src="./thanos.png" alt="Thanos Image" />
            <div className="text-center">
            <h1 className=" text-5xl  font-bold dark:text-white">404</h1>
            <p className="text-xl font-medium m-6 dark:text-white">Sorry, the page you're looking for can't be found.</p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Go Home</Link>
        </div>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage