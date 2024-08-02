import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  UseDisclosureProps,
} from "@nextui-org/react";
import { Instagram, Linkedin, X } from "lucide-react";
import ContactUsPopover from "./contact.us.popover";

export default ({ isOpen, onClose }: UseDisclosureProps) => {
  const contactUsDiscloser = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" hideCloseButton>
      <ModalContent className="bg-black w-full  flex justify-center items-center">
        <ContactUsPopover {...contactUsDiscloser} />
        <ModalBody className=" dark text-foreground w-full">
          <div className="flex justify-center items-center max-w-9xl w-full">
            <div className="lg:flex w-full p-0 max-w-[3000px] lg:divide-x-1 divide-white  ">
              <div className="relative grid grid-rows-2 w-0 overflow-hidden h-0 lg:h-auto lg:w-1/3 max-w-xs ">
                <div className="row-span-2 flex flex-col justify-between p-10 items-center">
                  <Button
                    radius="full"
                    variant="bordered"
                    isIconOnly
                    className="h-20 w-20 p-5"
                    onClick={onClose}
                    startContent={
                      <X
                        strokeWidth={1}
                        className=" rounded-full h-full w-full"
                      />
                    }
                  />
                  <span className="rotate-[270deg] ">
                    Unlock Your Potential.
                  </span>
                  <Button
                    className="border-white w-full"
                    variant="bordered"
                    radius="full"
                    size="lg"
                    onClick={contactUsDiscloser.onOpen}
                  >
                    Join Us
                  </Button>
                </div>
              </div>
              <div className="w-full min-h-screen lg:w-2/3 flex flex-col justify-between items-center gap-20 p-10 pt-0">
                <img
                  src="/kaido.logo.white.png"
                  className="max-h-32 max-w-32 lg:max-w-60 w-auto lg:max-h-auto"
                />
                <div className="flex flex-col gap-10 text-7xl font-bold items-center text-center">
                  <span className="cursor-pointer">SERVICES</span>
                  <span className="cursor-pointer">HOME</span>
                  <span className="cursor-pointer">KAIDŌ & CO.</span>
                  <span className="cursor-pointer">CONTACT</span>
                  <span className="cursor-pointer">ABOUT</span>
                </div>
                <div className="  z-20 flex justify-around gap-10  ">
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
              </div>
              <div className="relative grid grid-rows-2 w-0 h-0 lg:h-auto lg:auto lg:w-1/3 max-w-xs overflow-hidden ">
                <div className="row-span-2 flex flex-col justify-between p-10 items-center">
                  <span> ©KAIDŌ 2024 ALL RIGHTS RESERVED</span>
                  <span className="rotate-[270deg] ">Kaidō everywhere</span>
                  <Button
                    className="border-white w-full"
                    variant="bordered"
                    radius="full"
                    size="lg"
                    onClick={contactUsDiscloser.onOpen}
                  >
                    Start a Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
