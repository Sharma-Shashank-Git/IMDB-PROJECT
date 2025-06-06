
const Pagination = ({nextpageFn,prevpageFn,pagenumber}) => {
  return (
    <div className="bg-gray-400 p-4 h-10 items-center text-xl w-full mt-8 flex justify-center">
      <div className="px-8" onClick={prevpageFn}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>
        {pagenumber}
      </div>
      <div className="px-8" onClick={nextpageFn}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default Pagination;