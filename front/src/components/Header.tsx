import React from "react";
import { Link, Flex, Text } from "@chakra-ui/react";
import Menu from "./Menu.tsx";

const Header = () => {
    return (
        <NavBarContainer>
            <Menu/>
            <MenuItem to="/">MemoGotchi</MenuItem>
            <MenuItem to="/">SOS</MenuItem>
        </NavBarContainer>
    );
};

const MenuItem = ({ children, to = "/" }) => {
    return (
        <Link href={to}>
            <Text display="block">
                {children}
            </Text>
        </Link>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={4}
            bg="blue.main"
            color="white"
            {...props}
        >
            {children}
        </Flex>
    );
};

export default Header;