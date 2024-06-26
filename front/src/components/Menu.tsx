import {ReactNode, useRef} from "react";
import { IoIosMenu } from "react-icons/io";
import {
    Box,
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import CustomButton from "./CustomButton.tsx";

function Menu() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef(null);

    return (
        <>
            <CustomButton
                onClick={onOpen}
                ref={btnRef}
                icon={IoIosMenu}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay
                />
                <DrawerContent
                    bg="blue.main"
                    color="white"
                >
                    <DrawerCloseButton/>
                    <DrawerHeader>MemoGotchi</DrawerHeader>

                    <DrawerBody>
                        <Box
                            display="flex"
                            flexDirection='column'
                            alignItems={"flex-start"}
                            gap={4}
                            mt={8}
                        >
                            <MenuItem>Mon compte</MenuItem>
                            <MenuItem>Paramètres</MenuItem>
                            <MenuItem>Info santé</MenuItem>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <MenuItem>Déconnexion</MenuItem>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

function MenuItem(
    {children, to = "/"}: { children: ReactNode, to?: string }
) {
    return (
        <Button
            display="block"
            variant="ghost"
            color="white"
            width="100%"
            textAlign="left"
            _hover={{
                bg: "white",
                color: "blue.main",
            }}
            onClick={() => {
                // TODO change to router if need to be used in this project
                window.location.href = to;
            }}
        >
            {children}
        </Button>
    );
}


export default Menu;