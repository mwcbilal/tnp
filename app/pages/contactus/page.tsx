import ContactDetails from "@/components/ContactUs/ContactDetails";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactusHero from "@/components/ContactUs/ContactusHero";
import GetInTouch from "@/components/ContactUs/GetInTouch";

const Contactus = () => {
  return (
    <div>
      <div className="w-screen  flex flex-col gap-8  items-center  ">
        <ContactusHero />
        <div className="w-[80%] flex flex-col gap-8">
          <ContactDetails />
          <div className="flex md:flex-row flex-col w-full md:gap-12 gap-4 md:py-4 py-0">
            <GetInTouch />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactus;
