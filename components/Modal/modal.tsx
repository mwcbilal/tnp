"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AutoComplete, Select, Spin } from "antd";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";

const Modal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [options, setOptions] = useState();
  const [text, setText] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  const fetchPackages = async () => {
    setIsFetching(true);
    const res = await axios.get("/pages/api/tourpackages/search", {
      params: {
        text,
        limit: 10,
        offset: 0,
      },
    });
    console.log("DATAAA", res?.data);
    const temp = res?.data?.data?.map((pkg: any) => {
      return {
        value: pkg?.package_name,
        id: pkg?.package_id,
        category:
          pkg?.tnp_destinations?.tnp_package_categories?.package_category_name,
      };
    });
    setOptions(temp);
    setIsFetching(false);
  };

  useEffect(() => {
  if (modal){
  fetchPackages();
  }
  }, [text]);

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center pt-[10rem] ">
          <Link href={pathname} className="absolute top-10 right-10">
            <button type="button" className="bg-red-500 text-white p-2 rounded">
              x
            </button>
          </Link>
          <div className="bg-transparent mx-auto rounded-lg">
            <div className="flex w-full">
              <AutoComplete
                options={options}
                notFoundContent={isFetching ? <Spin size="small" /> : null}
                className="w-[40rem] h-[3rem]"
                onSelect={(_, data) => {
                  const { id, category } = data;
                  let path = `/pages/packagedetails/${category && category[0] === "honeymoon" ? "honeymoon/" : ""}${id}`;
                  router.push(path);
                }}
                onSearch={(val) => setText(val)}
                placeholder="input here"
              />
              <Link
                href={pathname + "?text=" + text}
                className="w-[3rem] h-[3rem] flex justify-center items-center bg-primary text-white rounded-lg shadow-2xl"
              >
                <button
                  type="button"
                  className="bg-primary rounded-lg shadow-2xl flex justify-center items-center w-full h-full text-white"
                >
                  <CiSearch className="mr-2" size={20} />
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
