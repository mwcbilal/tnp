import { NextPage } from "next";

interface Props {}

const SpecialRequirments: NextPage<Props> = ({}) => {
  return (
    <div className="w-11/12 md:w-[700px] px-12 py-14 mt-4 bg-white rounded-lg shadow-2xl">
      <div className=" bg-[#00ADEE] text-white w-52 py-1 px-2 rounded-md -mt-8 absolute ml-0 md:-ml-[3rem] lg:-ml-36">
        Any special requirments
      </div>
      <label
        htmlFor="message"
        className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
        Brief/requirements
      </label>
      <textarea
        id="message"
        rows={6}
        className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Brief/requirements"></textarea>
    </div>
  );
};

export default SpecialRequirments;
