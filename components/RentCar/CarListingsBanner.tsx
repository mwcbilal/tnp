import { NextPage } from 'next';
import CarTypeButtons from './CarTypeButtons';
import { useState } from 'react';
import RentBannerHeader from './RentBannerHeader';
import CarListing from './CarListing';
import RentalExperiance from './RentalExperiance';

interface Props {}

const CarListingsBanner: NextPage<Props> = ({}) => {
    const [selectedCarType, setselectedCarType] = useState("Sedan")
  return <div className='bg-[#EDEFF5] py-16 flex flex-col items-center'>
    <RentBannerHeader Title='Find Great Deals From Top-Rated Dealers' Description='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Donec vel interdum ipsum, eu ultrices dui. Vestibulum
        eget faucibus augue.' />

    <CarTypeButtons selectedCarType={selectedCarType} setSelectedCarType={setselectedCarType} />

    <CarListing />
  </div>
}

export default CarListingsBanner