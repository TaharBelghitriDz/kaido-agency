import { Triangle } from "lucide-react";
import Video from "../components/video";
import InfinityScroll from "../components/Infinity.scroll";

const whyUs = [
  "WE PROVIDE EXCEPTIONAL CULINARY EXPERIENCES THAT",
  "EXCEED CLIENTS' EXPECTATIONS.",
  "WE OFFER A WIDE RANGE OF OPTIONS AND TAILOR OUR SERVICES TO MEET UNIQUE NEEDS.",
  "WE'RE FLEXIBLE",
  "AND ADAPTABLE, DELIVERING",
  "QUALITY",
  "SERVICE WITH PASSION.",
];

const whoweareText = [
  "WE PROVIDE A COMPREHENSIVE SUITE OF SERVICES, FROM",
  "SOFTWARE DEVELOPMENT",
  "AND",
  "QUALITY ASSURANCE",
  "TO",
  "PROJECT MANAGEMENT",
  "AND",
  "MARKETING",
  "TO HELP BUSINESSES BRING",
  "THEIR IDEAS TO LIFE.",
];

const partenrs = [
  "https://cdn.brandfetch.io/dribbble.com/w/820/h/820/symbol",
  "https://cdn.brandfetch.io/apple.com/w/800/h/978/logo",
  "https://cdn.brandfetch.io/shopify.com/w/820/h/926/symbol",
  "https://cdn.brandfetch.io/reddit.com/w/820/h/820/symbol",
  "https://cdn.brandfetch.io/figma.com/w/820/h/1230/symbol",
  "https://cdn.brandfetch.io/wise.com/w/400/h/400",
];

export default () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center max-w-9xl w-full">
        <div className="w-full py-32">
          <div className="flex flex-col items-center justify-center space-y-60 w-full">
            <div className="flex flex-col justify-center items-center space-y-20">
              <div className="flex flex-col space-y-5 items-center text-xl font-medium ">
                <span>WHO WE ARE</span>
                <Triangle fill="black" className="rotate-180 rounded-non" />
              </div>
              <span className="p-5 text-lg md:text-3xl max-w-5xl space-x-3   ">
                {whoweareText.map((e, i) => (
                  <span key={i} className={(i + 1) % 2 == 0 ? "font-bold" : ""}>
                    {e}
                  </span>
                ))}
              </span>
            </div>
            {/* <InfinityScroll>
              {partenrs.map((e) => (
                <div
                  key={e}
                  className="flex justify-center items-center h-40 w-40 lg:h-64 lg:w-64 border-[1px] border-black cursor-pointer"
                >
                  <img
                    src={e}
                    alt=""
                    className="h-16 w-16  lg:w-32 lg:h-32 object-contain "
                  />
                </div>
              ))}
            </InfinityScroll> */}
            <Video />
            <div className="flex flex-col justify-center items-center space-y-20">
              <div className="flex flex-col space-y-5 items-center text-xl font-medium ">
                <span>WHY US</span>
                <Triangle fill="black" className="rotate-180 rounded-non" />
              </div>
              <span className="p-5 text-lg md:text-3xl max-w-5xl space-x-3   ">
                {whyUs.map((e, i) => (
                  <span key={i} className={(i + 1) % 2 == 0 ? "font-bold" : ""}>
                    {e}
                  </span>
                ))}
              </span>
            </div>
            <InfinityScroll>
              {partenrs.map((e) => (
                <div
                  key={e}
                  className="flex justify-center items-center h-40 w-40 lg:h-64 lg:w-64 border-[1px] border-black cursor-pointer"
                >
                  <img
                    src={e}
                    alt=""
                    className="h-16 w-16  lg:w-32 lg:h-32 object-contain "
                  />
                </div>
              ))}
            </InfinityScroll>
          </div>
        </div>
      </div>
    </div>
  );
};
