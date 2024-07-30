import { Button, Input } from "@nextui-org/react";

export default () => {
  return (
    <div className="w-full bg-black flex justify-center items-center">
      <div className="dark text-foreground flex justify-center items-center max-w-7xl w-full">
        <div className="w-full pt-32 p-5 pb-0">
          <div className="flex flex-col items-center justify-center space-y-32 w-full">
            <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-20">
              <div className="flex flex-col w-full justify-between items-start space-y-5">
                <span className="font-medium">Let's Talk </span>
                <span className="font-medium text-xl md:text-4xl underline">
                  kaido@gmail.com
                </span>
                <div className="flex flex-col md:flex-row items-start gap-10">
                  <div className="flex flex-col ">
                    <span className="font-bold text-lg">Phone Number </span>
                    <span>+ 345 4343990</span>
                    <span>+ 345 4343990</span>
                  </div>
                  <div className="flex flex-col ">
                    <span className="font-bold text-lg">Collaborate </span>
                    <span>iwixnwoicwbciowbc@djicnjcebc</span>
                    <span>+ 345 4343990</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start">
                <Button
                  radius="full"
                  variant="bordered"
                  className="border-zinc-200"
                >
                  Behance
                </Button>
                <Button
                  radius="full"
                  variant="bordered"
                  className="border-zinc-200"
                >
                  DRIBBBLE
                </Button>
                <Button
                  radius="full"
                  variant="bordered"
                  className="border-zinc-200"
                >
                  INSTAGRAM
                </Button>
                <Button
                  radius="full"
                  variant="bordered"
                  className="border-zinc-200"
                >
                  LINKEDin
                </Button>
              </div>
            </div>
            <Input
              variant="underlined"
              placeholder="EMAIL ADRESS"
              description="Join for exclusive offers, news and events!"
            />
            <div className="relative h-[35vw] md:h-[26vw] xl:h-[400px] overflow-hidden w-full flex flex-col justify-start items-center">
              <span className="w-full text-center">
                FULL SERVICE DESIGN AGENCY KAIDŌ™
              </span>
              <span className="text-[28vw] md:text-[25vw] xl:text-[400px] text-end font-extrabold">
                KAIDŌ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
