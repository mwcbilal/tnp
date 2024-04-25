import { NextPage } from 'next';
import TourCard from "./TourCard";

interface PackageStructure {
    package_id: number;
    package_name: string;
    package_total_persons: number;
    package_category_id: number;
    package_type_id: number;
    package_region_id: number;
    package_description: string;
    package_rate_normal: number;
    package_rate_deluxe: number;
    package_details: string | null;
    package_duration: string | null;
}

interface Props {
    PackageItems: PackageStructure[];
}

interface TripDetails {
    TripDetailsAndCostSummary: {
        CostIncludes: string[];
        CostExcludes: string[];
        Itinerary: {
            day: string;
            event: string;
            description: string;
        }[];
        Images: string[];
    };
}

const RenderTourCards: NextPage<Props> = ({ PackageItems }) => {

    return <div className="w-full flex flex-row flex-wrap gap-10 xl:gap-24 my-4">
        {PackageItems.map((item, index) => {
            const tripDetails: TripDetails = JSON.parse(item.package_details);
            console.log("package_details", tripDetails);
            return (
                <TourCard
                    key={5000 + index}
                    pid={item?.package_id}
                    pic={tripDetails.TripDetailsAndCostSummary.Images}
                    loc={'Pakistan'}
                    title={item?.package_name}
                    duration={item.package_duration}
                    people={item?.package_total_persons}
                    price={item?.package_rate_deluxe}
                    dprice={item?.package_rate_normal}
                    review={0}
                    imageCount={3}
                    videoCount={0}
                />
            )
        })}
    </div>
}

export default RenderTourCards