const Dropdown = ({options, selectedOption, onSelect})=>{
    return(
        <select value={selectedOption} onChange={(e)=>{onSelect(e.target.value)}} className=" bg-white-500 hover:bg-sky-500  text-black hover:text-white text-sm text-center hover:border-gray-500 px-2 py-2  rounded-3xl shadow leading-tight focus:outline-none focus:shadow-outline">
            {options.map((item, index)=>(
                <option className="hover:bg-sky-500 hover:text-white" value={item?.value}>{item?.label}</option>
            ))}
      </select>
    )
}
export default Dropdown;