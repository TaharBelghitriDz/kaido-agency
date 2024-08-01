import { Button } from "@nextui-org/react";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Menu,
  Plus,
  Triangle,
} from "lucide-react";

const MenuIcon = (props: Record<string, any>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
  </svg>
);

export default () => {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="flex justify-center items-center max-w-9xl w-full">
        <div className="lg:flex w-full p-0 max-w-[3000px] divide-x-1 divide-black ">
          <div className="relative grid grid-rows-2 w-0 overflow-hidden h-0 lg:h-auto lg:w-1/3 max-w-xs  ">
            <div className="relative row-span-1 flex overflow-hidden aspect-[10/15] bg-green-950">
              <img src="/left.pic.png" className="w-full h-full" />
              <MenuIcon
                color="white"
                className="absolute top-20 mx-auto left-0 right-0 z-30 cursor-pointer w-52 h-12 "
              />
              <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full " />
            </div>
            <div className="row-span-2 flex flex-col justify-between bg-white p-10">
              <span />
              <span className="rotate-[270deg] ">Unlock Your Potential.</span>
              <Button
                className="border-black"
                variant="bordered"
                radius="full"
                size="lg"
              >
                Book a Call
              </Button>
            </div>
          </div>
          <div className="w-full min-h-screen lg:w-2/3 flex flex-col justify-between items-center gap-20 p-10 pt-0">
            <div className="flex lg:flex-col justify-between items-center w-full gap-10 ">
              <img
                src="/kaido.logo.png"
                className="max-h-32 max-w-32 lg:max-w-60 w-auto lg:max-h-auto"
              />
              <Menu
                size={25}
                className="lg:invisible  lg:h-0 lg:overflow-hidden cursor-pointer"
              />
            </div>
            <div className="flex flex-col space-y-5 ">
              <div className="w-full flex justify-end">
                <Button
                  className="underline"
                  radius="none"
                  variant="light"
                  startContent={<Plus size={20} />}
                >
                  ABOUT
                </Button>
              </div>
              <span className="text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl flex text-center w-full font-semibold ">
                KAIDŌ IS FULL-SERVICE AGENCY THAT COMBINES CREATIVE DESIGN AND
                STRATEGIC MARKETING
              </span>
              <div className="w-full flex justify-start">
                <Button
                  className="underline"
                  radius="none"
                  variant="light"
                  endContent={<Plus size={20} />}
                >
                  CONTACT
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-20 w-full">
              <span className="max-w-xs text-center md:text-left flex md:grid">
                Constantly striving to create exceptional experience and tell
                your story in a meaningful way.
              </span>
              <div className="flex flex-col space-y-2 items-center text-lg font-medium ">
                <span>SCROLL</span>
                <Triangle fill="black" className="rotate-180 rounded-none " />
              </div>
            </div>
          </div>
          <div className="relative grid grid-rows-2 w-0 h-0 lg:h-auto lg:auto lg:w-1/3 max-w-xs overflow-hidden ">
            <div className="row-span-2 flex flex-col-reverse justify-between bg-white p-10">
              <span />
              <div className="-rotate-[270deg] flex justify-center items-center space-x-2">
                <span> Kaidō </span>
                <ArrowRight size={20} /> <span> everywhere</span>
              </div>
              <Button
                className="border-black"
                variant="bordered"
                radius="full"
                size="lg"
              >
                Start a Project
              </Button>
            </div>
            <div className="relative row-span-1 flex overflow-hidden aspect-[10/15] ">
              <img src="/right.pic.png" className="w-full h-full" />
              <div className="absolute bottom-10 w-full z-20 flex justify-around px-10 ">
                <Instagram
                  color="white"
                  size={65}
                  className=" cursor-pointer border-2 border-white p-4 rounded-full overflow-visible "
                />
                <Linkedin
                  color="white"
                  size={65}
                  className=" cursor-pointer border-2 border-white p-4 rounded-full overflow-visible "
                />
              </div>
              <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
