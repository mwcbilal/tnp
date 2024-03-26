import { IoMdCheckboxOutline } from "react-icons/io";
const Highlights = ({data})=>{
    return (
        <div className="flex flex-col w-full gap-4 mt-4 p-6 lg:p-0">
           <p className="text-xl font-bold text-black">Highlights</p>
           <div className="flex flex-col gap-2">
            {data.map((item : any, index:any)=>(
                <div key={index} className="flex flex-row gap-2">
                    <IoMdCheckboxOutline className="text-yellow-400 mt-[2px]"/> 
                    <p className="text-sm">{item}</p>
                </div>

            ))}
           </div>
           

        </div>
    )
}
export default Highlights;
