import ReactPaginate from "react-paginate"

const Pagination = () => {
   const handlePageClick = (event:any)=>{
    console.log(event)
   }

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel={
            <button
            disabled
            className="disabled:select-none select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Next
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        pageCount={20}
        pageLinkClassName={"w-8 h-8 p-3 rounded-full flex items-center justify-center"}
        previousLabel={<button
            disabled
            className="select-none rounded-lg border dark:  border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Previous
          </button>}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center gap-6 p-4 border-t border-blue-gray-50"
        pageClassName="w-8 h-8 bg-red-100 rounded-full"
      />
      )

};
 
export default Pagination