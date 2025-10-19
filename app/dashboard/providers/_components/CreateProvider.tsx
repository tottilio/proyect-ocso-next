import { Modal,Button, ModalBody, ModalContent } from "@heroui/react";
import { useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";

const CreateProvider = ({children}: {children: ReactNode}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return(
        <>
            <Button onPress={onOpen} className="bg-blue-600 py-3 px-8  rounded-lg " ><LuPlus size="20" color="white"/></Button>
            <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent className="w-full">
                    {() => (
                        <>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
 
export default CreateProvider;