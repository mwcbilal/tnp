import { NextPage } from 'next';
import Image from 'next/image';
import logo from "../../assets/common/Logo.svg";
import sc0 from "../../assets/footer/01.svg";
import sc1 from "../../assets/footer/02.svg";
import sc2 from "../../assets/footer/03.svg";
import sc3 from "../../assets/footer/04.svg";

interface Props {}

const LogoDetails: NextPage<Props> = ({}) => {
  return <div className='min-w-72 max-w-80'>
  <div className="mb-3">
    <Image src={logo} alt="not_found_image" />
  </div>
  
  <div className="mb-3">
    <p>
      A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tation ullamcorper.
    </p>
  </div>

  <div className="flex w-52 justify-between">
    <Image
      src={sc0}
      alt="not_found_image"
      width={40}
      height={40}
    />
    <Image
      src={sc1}
      alt="not_found_image"
      width={40}
      height={40}
    />
    <Image
      src={sc2}
      alt="not_found_image"
      width={40}
      height={40}
    />
    <Image
      src={sc3}
      alt="not_found_image"
      width={40}
      height={40}
    />
  </div>

  <div className="lg:hidden mt-16 mb-16 bg-gray-300 h-[2px] w-[300px]"></div>
</div>
}

export default LogoDetails