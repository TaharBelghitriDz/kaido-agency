import { Avatar, Snippet } from "@nextui-org/react";
import Ripple from "../lib/riple";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default () => {
  const users = [
    ` Hey i am Jason. Would you like to contact the CEO. contact in email: lllll@agency.com`,
    ` Hey i am Jason. Would you like to contact the CEO. contact in email: lllll@agency.com`,
  ];

  return (
    <div className="w-full bg-black flex justify-center items-center">
      <div className="dark text-foreground flex justify-center items-center max-w-9xl w-full">
        <div className="w-full py-32 pt-0 max-w-3xl justify-center text-zinc-200">
          <div className="flex flex-col items-center justify-center gap-5 p-10 overflow-visible">
            <div className="dark p-0 relative flex aspect-square w-full max-w-xl flex-col items-center justify-center overflow-visible bg-background">
              <img
                src="/kaido.logo.white.png"
                className="max-h-32 max-w-32 w-auto"
              />
              <Ripple />
            </div>
            <span className=" font-bold tetx-3xl md:text-7xl pb-32">
              Contact
            </span>
            <div className="flex flex-col md:flex-row gap-5  items-center  ">
              {users.map((e, i) => (
                <div
                  key={e + i}
                  className="flex gap-5 flex-col w-full p-5 bg-foreground/10 rounded-xl cursor-pointer "
                >
                  <Avatar size="lg" />
                  <span className="">{e}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-start w-full">
              <div className="flex flex-col gap-5 items-center bg-foreground/10 p-5 rounded-xl cursor-pointer min-w-xs w-full">
                <Phone />
                <span>call now</span>
              </div>
              <div className="flex flex-col gap-5 items-center bg-foreground/10 p-5 rounded-xl cursor-pointer min-w-xs w-full">
                <MessageCircle />
                <span>Message</span>
              </div>
              <div className="flex flex-col gap-5 items-center bg-foreground/10 p-5 rounded-xl cursor-pointer min-w-xs w-full">
                <Mail />
                <span>Email</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-start w-full ">
              <Snippet
                className="w-full bg-foreground/10"
                radius="md"
                size="lg"
                symbol={"📱"}
              >
                +23 4556 7879 98
              </Snippet>
              <Snippet
                className="w-full bg-foreground/10"
                radius="md"
                size="lg"
                symbol="💻"
              >
                Kaido@gmail.com
              </Snippet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
