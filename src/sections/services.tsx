import SectionTitle from "../components/section.title";

const servicesArrayList = [
  "WEB SERVICES",
  "MARKETING",
  "APP SERVICES",
  "BRANDING",
];

const ServicesList = () => {
  return (
    <div className="divide-y-1 divide-black w-full">
      <div className="w-full" />
      {servicesArrayList.map((e, i) => (
        <div
          key={e}
          className="w-full flex justify-between items-center p-10 lg:p-20  cursor-pointer"
        >
          <span>0{i + 1}/</span>
          <span className="w-full text-right md:text-2xl lg:text-7xl mr-5 md:mr-32 font-medium md:font-semibold">
            {e}
          </span>
          <span>[open]</span>
        </div>
      ))}
      <div className="w-full" />
    </div>
  );
};

export default () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center max-w-9xl w-full">
        <div className="w-full py-32">
          <div className="flex flex-col items-center justify-center space-y-20 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start w-full p-5 md:p-20 space-y-10 md:space-y-0">
              <SectionTitle title="SERVICES" color="black" />
              <span className="md:text-right max-w-xl text-sm">
                At Kaidō, we understand that every business is unique, and
                that's why we offer a range of expert services designed to help
                you achieve your goals. Our team of experienced professionals
                will work closely with you to understand your needs and develop
                a customized strategy that meets your objectives.
              </span>
            </div>
            <ServicesList />
          </div>
        </div>
      </div>
    </div>
  );
};
