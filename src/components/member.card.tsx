import { MapPin } from "lucide-react";
import InfinityScroll from "./Infinity.scroll";

type Member = {
  role: string;
  pastWork: string;
  address: string;
  experience: string;
  study: string;
};

const partenrs = [
  "https://cdn.brandfetch.io/dribbble.com/w/820/h/820/symbol",
  "https://cdn.brandfetch.io/apple.com/w/800/h/978/logo",
  "https://cdn.brandfetch.io/shopify.com/w/820/h/926/symbol",
  "https://cdn.brandfetch.io/reddit.com/w/820/h/820/symbol",
  "https://cdn.brandfetch.io/figma.com/w/820/h/1230/symbol",
  "https://cdn.brandfetch.io/wise.com/w/400/h/400",
];

export default (props: { Members: Member[] }) => {
  return (
    <InfinityScroll>
      {props.Members.map((e) => (
        <div
          key={e.address}
          className="relative p-10 flex flex-col justify-center items-start border-[1px] border-black cursor-pointer space-y-5"
        >
          <div className="flex justify-between items-center w-56">
            <span className="text-xl font-medium ">{e.role}</span>
            <div className=" h-4 w-4 bg-black right-10 top-6" />
          </div>
          <span className="text-md ">{e.pastWork}</span>
          <div className="flex space-x-3">
            <MapPin size={20} />
            <span>{e.address}</span>
          </div>
          <div className="flex space-x-3">
            <MapPin size={20} />
            <span>{e.experience}</span>
          </div>
          <div className="flex space-x-3">
            <MapPin size={20} />
            <span>{e.study}</span>
          </div>
        </div>
      ))}
    </InfinityScroll>
  );
};
