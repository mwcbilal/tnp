 "use client";
import FeaturedListings from '@/components/TourPackage/FeaturedListings'
import TourPackHero from '@/components/TourPackage/TourPackHero'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const params = useParams();
    console.log("Param", params);
    const { category } = params;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return <div>
        <TourPackHero heading={capitalizeFirstLetter(category.length > 0 && category[0])} subheading={category.length > 1 && capitalizeFirstLetter(category[1])} />
        <FeaturedListings />
    </div>
}

export default Page