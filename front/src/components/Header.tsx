import React from "react";
import { Link, Flex, Text } from "@chakra-ui/react";
import Menu from "./Menu.tsx";

const Header = () => {
    return (
        <NavBarContainer>
            <Menu/>
            <MenuItem to="/">MemoGotchi</MenuItem>
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
            justify="flex-start"
            wrap="wrap"
            w="100%"
            bg="green.main"
            color="white"
            {...props}
        >
            {children}
        </Flex>
    );
};

export default Header;