import { Button } from "@nextui-org/react";
import MemberCard from "../components/member.card";
import { ArrowRight } from "lucide-react";

const members = Array.from({ length: 10 }).map((_) => ({
  role: "SEO specialist ",
  pastWork: "Nike, Amazon, netflix",
  address: "United States",
  experience: "6 years",
  study: "Harvard",
}));

export default () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center max-w-9xl w-full">
        <div className="w-full py-32">
          <div className="flex flex-col items-center justify-center space-y-60 w-full">
            <MemberCard Members={members} />
            <div className="flex flex-col md:flex-row justify-between max-w-7xl items-start w-full gap-10 p-5  ">
              <span className="max-w-lg">
                We're a full-service team dedicated to helping businesses like
                yours succeed. Our team of experts is comprised of creative
                visionaries, strategic thinkers, and technical wizards who work
                together to deliver innovative solutions that drive results.
              </span>
              <Button variant="bordered" className=" rounded-3xl text-lg p-5">
                JOIN US
              </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-between max-w-7xl items-center w-full p-5 ">
              <Button
                className=" w-full border-b-1 border-black rounded-none md:w-3/12 justify-between"
                variant="light"
                endContent={<ArrowRight />}
              >
                COLLABORATE
              </Button>
              <Button
                className=" w-full border-b-1 border-black rounded-none md:w-3/12 justify-between"
                variant="light"
                endContent={<ArrowRight />}
              >
                START A PROJECT
              </Button>
              <Button
                className=" w-full border-b-1 border-black rounded-none md:w-3/12 justify-between"
                variant="light"
                endContent={<ArrowRight />}
              >
                BOOK A CALL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
