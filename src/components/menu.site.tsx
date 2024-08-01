import {
  Modal,
  ModalBody,
  ModalContent,
  UseDisclosureProps,
} from "@nextui-org/react";

export default ({ isOpen, onClose }: UseDisclosureProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent className="p-10">
        <>
          {/* <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader> */}
          <ModalBody>
            <p className="text-3xl">
              i'm gonna wait until you design this section
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
              et. Culpa deserunt nostrud ad veniam.
            </p>
          </ModalBody>
          {/* <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter> */}
        </>
      </ModalContent>
    </Modal>
  );
};
