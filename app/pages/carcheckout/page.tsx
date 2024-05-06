import React from "react";
import carImage from "../../../assets/carcheckout/carImage2.jpg";
import { SlLocationPin } from "react-icons/sl";
import { SlClock } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import mobileImage from "../../../assets/footer/mobile_app_download.png";
import { SlArrowLeft } from "react-icons/sl";

const page = () => {
  const data = [
    { icon: "SlLocationPin" },
    { icon: "FaClock" },
    { icon: "MdDateRange" },
  ];

  return (
    <div>
      <div className="bg-[#fbad17] w-full h-[100px] flex flex-row items-center">
      <SlArrowLeft
          size={30}
          className="p-[3px] text-black ml-[10rem] font-semibold"/>
          <h1 className="text-black text-[30px] ml-2 font-semibold">Back</h1>

      </div>
      {/* -----MAIN CONTENT FROM HERE------------- */}
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-6 justify-center mx-auto my-10">
        {/* ----RIGHT SIDE----- */}
        <div className="w-full lg:w-[60%]">
          <div>
            <img
              src={carImage.src}
              alt="Car"
              className="w-full lg:w-auto max-w-full"
            />
          </div>

          <div>
            <h1 className="text-gray-600 text-[25px] mb-5 ml-5 lg:ml-2">Pick-up & Drop-off Details</h1>
             {/* -----FORM-1----- */}
            <p className="mb-5 ml-5 lg:ml-2">Pick-up Details</p>
            <div className="flex flex-row ml-[2rem] lg:ml-0">
              <div className="w-[10%]">
                <ol className="flex flex-col items-center">
                  <li className="relative w-full">
                    <div className="flex flex-col">
                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <SlLocationPin
                          size={30}
                          className="bg-primary p-[3px] text-white rounded-full"
                        />
                      </div>
                      <div className="flex w-[2%] mt-2 bg-primary h-[60px] ml-4 dark:bg-gray-700"></div>
                    </div>
                  </li>

                  <li className="relative w-full">
                    <div className="flex flex-col">
                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <SlClock
                          size={30}
                          className="bg-primary p-[3px] text-white rounded-full"
                        />
                      </div>
                      <div className="flex w-[2%] mt-2 bg-primary h-[60px] ml-4 dark:bg-gray-700"></div>
                    </div>
                  </li>

                  <li className="relative w-full">
                    <div className="flex flex-col">
                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <SlCalender
                          size={30}
                          className="bg-primary p-[3px] text-white rounded-full"
                        />
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="w-[80%] ml-[2rem] lg:ml-0 mr-5 lg:mr-0">
                <form className="max-w-sm mx-auto">
                  <div className="mb-5 mt-1">
                    <input
                      type="email"
                      id="email"
                      className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Location"
                      required
                    />
                  </div>
                  <div className="mb-5 mt-[4rem]">
                    <input
                      type="password"
                      id="password"
                      className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Time"
                      required
                    />
                  </div>

                  <div className="mb-5 mt-[4rem]">
                    <input
                      type="password"
                      id="password"
                      className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date"
                      required
                    />
                  </div>
                 
            
                </form>
              </div>
            </div>
             {/* -----FORM-2----- */}
             <p className="mb-5 mt-10 ml-5 lg:ml-2">Drop-off Details</p>
             <div className="flex flex-row ml-[2rem] lg:ml-0">
              <div className="w-[10%]">
                <ol className="flex flex-col items-center">
                  <li className="relative w-full">
                    <div className="flex flex-col">
                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <SlLocationPin
                          size={30}
                          className="bg-primary p-[3px] text-white rounded-full"
                        />
                      </div>
                      <div className="flex w-[2%] mt-2 bg-primary h-[60px] ml-4 dark:bg-gray-700"></div>
                    </div>
                  </li>

                  <li className="relative w-full">
                    <div className="flex flex-col">
                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <SlClock
                          size={30}
                          className="bg-primary p-[3px] text-white rounded-full"
                        />
                      </div>
                      <div className="flex w-[2%] mt-2 bg-primary h-[60px] ml-4 dark:bg-gray-700"></div>
                    </div>
                  </li>

                  <li className="relative w-full">
                    <div className="flex flex-col">
                      <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <SlCalender
                          size={30}
                          className="bg-primary p-[3px] text-white rounded-full"
                        />
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="w-[80%] ml-[2rem] lg:ml-0 mr-5 lg:mr-0">
                <form className="max-w-sm mx-auto">
                  <div className="mb-5 mt-1">
                    <input
                      type="email"
                      id="email"
                      className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Location"
                      required
                    />
                  </div>
                  <div className="mb-5 mt-[4rem]">
                    <input
                      type="password"
                      id="password"
                      className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Time"
                      required
                    />
                  </div>

                  <div className="mb-5 mt-[4rem]">
                    <input
                      type="password"
                      id="password"
                      className="shadow-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date"
                      required
                    />
                  </div>
                 
            
                </form>
              </div>
            </div>


          </div>
        </div>

        {/* ------LEFT SIDE----- */}
        <div className=" w-full lg:w-[80%] ml-3 mr-3 mt-10">
          {/* ------FIRST TABLE------ */}

          <div className="mr-5 lg:mr-0 relative overflow-x-auto shadow-lg sm:rounded-[35px] border border-gray-200 bg-transparent">
            <table className="w-full text-md text-left rtl:text-right text-black dark:text-blue-100">
              <thead className="text-md text-[#fbad17] uppercase bg-white border-b border-gray-200 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-10"></th>
                  <th scope="col" className="px-6 py-10">
                    Rate
                  </th>
                  <th scope="col" className="px-6 py-10">
                    No. of Days
                  </th>
                  <th scope="col" className="px-6 py-10">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-transparent border-b border-gray-200 ">
                  <th
                    scope="row"
                    className="px-6 py-4 text-xl text-primary whitespace-nowrap dark:text-blue-100"
                  >
                    Rental
                  </th>
                  <td className="px-6 py-7 text-gray-400">PKR 8,000/day</td>
                  <td className="px-6 py-7 text-gray-400">1</td>
                  <td className="px-6 py-7 text-gray-400">8,000</td>
                </tr>
                <tr className="bg-transparent border-b border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4  text-primary text-xl whitespace-nowrap dark:text-blue-100"
                  >
                    Base Fare
                  </th>
                  <td className="px-6 py-7"></td>
                  <td className="px-6 py-7"></td>
                  <td className="px-6 py-7 text-gray-400">225</td>
                </tr>
                <tr className="bg-transparent border-b border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 text-primary text-xl whitespace-nowrap dark:text-blue-100"
                  >
                    Fuel
                  </th>
                  <td className="px-6 py-7 text-gray-400">40/km</td>
                  <td className="px-6 py-7"></td>
                  <td className="px-6 py-7"></td>
                </tr>
                <tr className="bg-transparent border-b border-gray-200">
                  <th
                    scope="row"
                    className="px-6 py-4 text-primary text-xl whitespace-nowrap dark:text-blue-100"
                  >
                    Over Time
                  </th>
                  <td className="px-6 py-7 text-gray-400">350/hr</td>
                  <td className="px-6 py-7"></td>
                  <td className="px-6 py-7"></td>
                </tr>
                <tr className="bg-white border-gray-200 ">
                  <th
                    scope="row"
                    className="px-6 py-4   text-red-500 text-xl whitespace-nowrap dark:text-blue-100"
                  >
                    Discount
                  </th>
                  <td className="px-6 py-7"></td>
                  <td className="px-6 py-7"></td>
                  <td className="px-6 py-7 text-primary underline text-xl">
                    Promo code
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ----SECOND TABLE----- */}
          <h1 className=" text-[30px] text-primary mt-[7rem] mb-[2rem] ml-[10px] font-bold">
            Optional service
          </h1>
          <div className="mr-5 lg:mr-0 relative overflow-x-auto shadow-lg sm:rounded-[25px] border border-gray-200 bg-transparent py-4 px-7">
            <h3 className="text-primary text-[25px] font-bold mb-2">
              Refill Tank
            </h3>
            <p className="text-gray-400">Refill fuel at the end of the day</p>
          </div>

          {/* -----TOTAL AMOUNT SECTION----- */}
          <div className="flex flex-col lg:flex-row justify-between mt-[4rem] mb-[5rem] ml-[10px]">
            <h1 className="text-black text-[30px] font-medium">Total Amount</h1>
            <h1 className="text-[#fbad17] text-[40px] font-bold">PKR 8,225</h1>
          </div>

          {/* ------LAST NOTE-------- */}
          <div className="ml-[10px] mt-10 mb-10">
            <h3 className="text-primary font-medium text-[25px] mb-3">
              Excluding fuel & overtime charges
            </h3>
            <h3 className="text-[#fbad17] text-[20px] font-medium mb-5">
              〔charges - <span className="text-primary">view details</span>〕
            </h3>
            {/* -----TICK AND NOTE----- */}
            <div className="flex flex-col lg:flex-row mr-5 lg:mr-0">
              <p>
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-3 h-3 text-white dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="5"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </p>
              <p className="ml-0 lg:ml-3 text-[20px] mt-3 lg:mt-0">
                Kindly note that the Fuel Charges and Overtime will be applied
                based on the mileage of the car and extra hours of the services
                if any. Your final invoice will be generated after adding the
                fuel and overtime charges at the end of your reservation. For
                more details please read the{" "}
                <span className="text-primary font-bold">
                  Fuel and Overtime charges
                </span>{" "}
                and{" "}
                <span className="text-primary font-bold">Terms of use. </span>
              </p>
            </div>
            {/* -----BUTTONS---- */}
            <div className="mr-5 lg:mr-0 flex flex-col lg:flex-row">
              {/* -----FIRST BUTTON----- */}
              <button
                type="button"
                className="px-5 py-5 lg:w-[30%] mt-5 focus:outline-none text-white bg-[#fbad17] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-[25px] me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Cancel
              </button>
              {/* ------SECOND BUTTON------ */}
              <button
                type="button"
                className="lg:w-[70%] mt-5 lg:ml-5 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[25px] px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----FOOTER IMAGE----- */}
      <div className="py-10 px-10 lg:px-40 justify-center items-center">
        <img
          src={mobileImage.src}
          alt="Car"
          className="w-full lg:w-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default page;
