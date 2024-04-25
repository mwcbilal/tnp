"use client";

import { NextPage } from "next";
import "./page.css";
import MyDropdown from "../../../components/Offer/dropdown";
import { useEffect, useState } from "react";
import Banner from "@/components/Offer/Banner";
import PersonalDetails from "../../../components/Offer/PersonalDetails";

import BannerImg from "../../../assets/offer/BG.svg";
import TourDetails from "../../../components/Offer/tourDetail";
import SpecialRequirments from "../../../components/Offer/specialReq";
import Payment from "@/components/Offer/payment";
import styled, { css } from "styled-components";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [counter, setCounter] = useState(0);
  const [move, setMove] = useState(20);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let moveValue = 10;
    if (screenWidth <= 425) {
      moveValue = 16.5;
    }
    if (screenWidth >= 768) {
      moveValue = 16.5;
    }
    if (screenWidth >= 1024) {
      moveValue = 15.5;
    }
    if (screenWidth >= 1440) {
      moveValue = 16;
    }
    setMove(moveValue * counter);
  }, [counter]);

  const ImageForwardHandler = () => {
    setCounter(counter + 1);
  };

  const ImageBackwardHandler = () => {
    setCounter(counter - 1);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <Banner
        UpcommingImage={BannerImg}
        Heading="MAKE YOUR OWN TRIP"
        Subheading=""
        move={move}
        setMove={setMove}
      />
      <div className="w-full mb-14 flex pb-10 flex-col items-center rounded-lg md:mt-16 mx-auto md:w-11/12">
        {counter === 0 ? (
          <PersonalDetails />
        ) : counter === 1 ? (
          <TourDetails />
        ) : counter === 2 ? (
          <SpecialRequirments />
        ) : (
          <Payment />
        )}
        <div
          className={`w-11/12 md:w-[700px] px-2 md:px-0 flex ${
            counter === 0 ? "justify-end" : "justify-between"
          } mt-10`}>
          {counter >= 1 && (
            <button
              onClick={ImageBackwardHandler}
              className="py-2 px-12 bg-[#FBAD17] rounded-sm text-sm text-white">
              BACK
            </button>
          )}
          {counter < 3 ? (
            <button
              onClick={ImageForwardHandler}
              className="py-2 px-12 bg-[#00ADEE] rounded-sm text-sm text-white">
              NEXT
            </button>
          ) : (
            <button
              onClick={ImageForwardHandler}
              className="py-2 px-6 bg-[#00ADEE] rounded-sm text-sm text-white">
              BOOK NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
