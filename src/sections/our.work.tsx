import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@nextui-org/react";
import { Image } from "../components/image";
import { useMediaQuery } from "usehooks-ts";
import SectionTitle from "../components/section.title";

const projects = [
  {
    title: "SPRING",
    subtitle: "Making your shopping experience safe and fun.",
    link: "https://google.com",
    cover: "https://random-image-pepebigotes.vercel.app/api/random-image",
  },
  {
    title: "CREATSY",
    subtitle: "Making your shopping experience safe and fun.",
    link: "https://google.com",
    cover: "https://random-image-pepebigotes.vercel.app/api/random-image",
  },
  {
    title: "Spring",
    subtitle: "Making your shopping experience safe and fun.",
    link: "https://google.com",
    cover: "https://random-image-pepebigotes.vercel.app/api/random-image",
  },
  {
    title: "CREATSY",
    subtitle: "Making your shopping experience safe and fun.",
    link: "https://google.com",
    cover: "https://random-image-pepebigotes.vercel.app/api/random-image",
  },
].map((e, i) => ({ ...e, id: i }));

const ProjectsSlider = () => {
  const [selected, setSelected] = useState(0);
  const isSmall = useMediaQuery("(min-width: 1024px)");

  const slectedProject = projects[selected];

  const animateObject = (i: number) => {
    if (isSmall)
      return selected != i
        ? { width: "8.333333%", height: "100%", opacity: 0.6 }
        : { width: "75%", height: "100%", opacity: 1 };
    else
      return selected != i
        ? { height: "15%", width: "100%", opacity: 0.6 }
        : { height: "80%", width: "100%", opacity: 1 };
  };

  return (
    <div className="w-full flex flex-col space-y-20 items-start">
      <div className="w-full flex flex-col space-y-5 items-start p-5 pb-0 md:p-20 ">
        <motion.div
          key={Date.now()}
          layoutId="title"
          animate={{
            filter: ["blur(0px)", "blur(20px)", "blur(0px)"],
            opacity: [1, 0.9, 1],
            transition: { duration: 0.3 },
          }}
          className="flex space-x-2 justify-center items-start "
        >
          <span className="text-[16px] tex-white flex justify-center items-center rounded-full border-1 border-white h-8 w-8">
            {selected + 1}
          </span>

          <motion.span
            key={slectedProject.title}
            animate={{
              opacity: [0, 1],
              transition: { duration: 0.3 },
            }}
            className=" text-[44px] lg:text-[128px] font-bold leading-[44px] lg:leading-[120px]"
          >
            {slectedProject.title}
          </motion.span>
          <span className=" text-xl lg:text-[30px] font-bold">TM</span>
        </motion.div>
        <div className="w-full flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between items-start text-sm font-medium ">
          <motion.span
            key={Date.now()}
            animate={{
              filter: ["blur(0px)", "blur(20px)", "blur(0px)"],
              opacity: !isSmall ? [1, 0.9, 1] : 1,
              transition: { duration: 0.3 },
            }}
          >
            Making your shopping experience safe and fun.
          </motion.span>
          <span>Select The Work</span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col space-y-0 space-x-0 w-full divide-y-3 lg:divide-y-0 lg:divide-x-3 divide-white aspect-square lg:aspect-[15/5] overflow-hidden ">
        {projects.map((e, i) => (
          <motion.div
            key={i}
            className=" h-full w-full aspect-video"
            onClick={() => setSelected(i)}
            animate={animateObject(i)}
          >
            <Image
              src={e.cover}
              alt={e.title}
              className={cn("object-cover cursor-pointer h-full w-full")}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="w-full bg-black flex justify-center items-center">
      <div className="dark text-foreground flex justify-center items-center max-w-9xl w-full">
        <div className="w-full py-32 ">
          <div className="flex flex-col items-center justify-center space-y-20">
            <div className="flex flex-col md:flex-row justify-between items-start w-full p-5 md:p-20 space-y-10 md:space-y-0">
              <SectionTitle title="OUR WORK" color="white" />
              <span className="md:text-right max-w-xl text-sm">
                At Kaidō, we're a team of creative professionals dedicated to
                helping businesses thrive in today's fast-paced digital
                landscape. Our expertise lies in crafting innovative marketing
                and design solutions that captivate audiences, drive engagement,
                and ultimately, drive results.
              </span>
            </div>
            <ProjectsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};
