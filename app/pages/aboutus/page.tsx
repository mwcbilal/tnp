"use client";
import BookNow from "@/components/AboutUS/BookNow";
import FollowUs from "@/components/AboutUS/FollowUs";
import HeroAboutUs from "@/components/AboutUS/HeroAboutus";
import InstagramPost from "@/components/AboutUS/InstagramPost";
import ExploreTheWorld from "@/components/AboutUS/exploreTheWorld";
import SavingTravelTrips from "@/components/AboutUS/savingTravelTrips";

const Aboutus = () => {
  return (
    <div>
      <HeroAboutUs />
      <BookNow />
      <SavingTravelTrips />
      <ExploreTheWorld />
      <InstagramPost />
      <FollowUs />
    </div>
  );
};
export default Aboutus;
