import HeroDomestic from "@/components/Domestics/HeroDomestic"
import Hotelform from "@/components/hotel/hotelForm"

const Hotel =()=> {
    return (
        <div>
            <HeroDomestic heading="Hotels" paragraph={"Form"} />
            <Hotelform />
        </div>
    )
}

export default Hotel