import Image from "next/image";
import check from "../../public/domestic/check.png";
import cancel from "../../public/domestic/Cancel.png"
const Cost = ({includeCost,costExclude}:any) => {
  

  
  return (
    <div className="flex flex-col gap-6 mt-4 p-6 lg:p-0 ">
      <p className="text-2xl font-bold">Cost</p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-2xl">The Cost Includes</p>
          <div className="flex flex-col gap-2">
            {includeCost.map((item : any, index :any) => (
              <div key={index} className="flex flex-row gap-4">
                <Image
                  src={check}
                  alt="checkbox.."
                  className="h-4 w-4 mt-[4px]"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl ">The Cost Excludes</p>
            <div className="flex flex-col gap-2">
                {costExclude.map((item : any, index : any)=>(
                    <div key={index} className="flex flex-row gap-4">
                        <Image src={cancel} alt="cancel icon.." className="h-4 w-4 mt-[4px]"/>
                        <p>{item}</p>

                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cost;
