import Progressbar from "./Progressbar";

const Itinerary = ({data})=>{
    return(
        <div className="flex flex-col gap-4 mt-4 p-6 lg:p-0">
            <p className="text-2xl font-bold">Itinerary</p>
            <Progressbar data={data}/>
        </div>
    )
}
export default Itinerary;