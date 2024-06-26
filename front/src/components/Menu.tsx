import React, {useRef} from "react";
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

function Menu() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
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

function MenuItem({children, to = "/"}) {
    return (
        <Button
            display="block"
            variant="ghost"
            color="white"
            href={to}
            width="100%"
            textAlign="left"
            _hover={{
                bg: "white",
                color: "blue.main",
            }}
        >
            {children}
        </Button>
    );
}


export default Menu;