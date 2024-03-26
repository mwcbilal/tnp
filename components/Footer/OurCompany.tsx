import { ourCompanyLinks } from "@/assets/strings/NavigationString";
import { NextPage } from "next";

interface Props {}

const OurCompany: NextPage<Props> = ({}) => {
  return (
    <div className="min-w-72 max-w-80">
      <p className="text-xl font-semibold mb-8">Our Company</p>

      {ourCompanyLinks.map((item, i) => (
        <p className="mb-5" key={"rendering-our-company-link-" + i}>
          <a href={item.link}>{item.name}</a>
        </p>
      ))}
      
      <div className="lg:hidden mt-16 mb-16 bg-gray-300 h-[2px] w-[300px]"></div>
    </div>
  );
};

export default OurCompany;
