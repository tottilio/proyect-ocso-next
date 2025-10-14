'use client'
import { Modal,ModalContent, ModalHeader,ModalBody,ModalFooter,Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UpdateLocation({children, store}: {children: ReactNode, store: string | string[] | undefined}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    if(!store) return <div/>
    return (
        <>
            <Button onPress={onOpen} className="bg-blue-600 py-3 px-8  rounded-lg " ><LuPencil size="20" color="white"/></Button>
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
    );
}
