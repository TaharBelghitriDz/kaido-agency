import {
  Modal,
  ModalBody,
  ModalContent,
  Snippet,
  UseDisclosureProps,
} from "@nextui-org/react";

export default ({ isOpen, onClose }: UseDisclosureProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent className="p-3  rounded-3xl">
        <ModalBody className="gap-10">
          <p className="text-xl">
            i'm gonna wait until you design this section
          </p>
          <Snippet color="primary" hideSymbol>
            kaido.agency@gmail.com
          </Snippet>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
