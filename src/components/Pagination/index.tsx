import React, { useState } from "react";
import { DiVim } from "react-icons/di";
import ReactPaginate from "react-paginate"

interface PaginationProps {
  pageCount:number;
  setOffset:React.Dispatch<React.SetStateAction<number>>
}
interface eventProps {
  selected:number;
}

const DATA_COUNT= 20

const Pagination : React.FC<PaginationProps> = ({
  pageCount,
  setOffset
}) => {
  const [SelectedIndex,SetSelectedIndex] = useState<number>(0)

   const handlePageClick = (event:eventProps)=>{
    const selected = Number(event.selected)
    SetSelectedIndex(selected)
    const offset = selected * DATA_COUNT 
    setOffset(offset)
  }

  const DisablePrev = SelectedIndex===0;
  const DisableNext = SelectedIndex===(pageCount-1)

    return (
        <ReactPaginate
        breakLabel={
          <span className="dark:text-white">
            ...
          </span>
        }
        nextLabel={
            <button
            disabled={DisableNext}
            className="dark:text-white disabled:select-none dark:border-slate-200 select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Next
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        pageLinkClassName={"w-8 h-8 p-3 rounded-full flex items-center justify-center"}
        previousLabel={<button
            disabled={DisablePrev}
            className="select-none dark:text-white rounded-lg border dark:  border-slate-200 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Previous
          </button>}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center gap-6 p-4 border-t border-blue-gray-50"
        pageClassName="w-8 h-8 bg-red-100 dark:text-white dark:bg-slate-500 rounded-full"
      />
      )

};
 
export default Pagination