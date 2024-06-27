import {Link, Flex, Text, Image} from "@chakra-ui/react";
import Menu from "./Menu.tsx";
import Logo from "../assets/logo.png";
import {ReactNode} from "react";

const Header = () => {
    return (
        <NavBarContainer>
            <Menu/>
            <MenuItem to="/">
                <Image
                    src={Logo}
                    alt="MemoHelp"
                    h="20px"
                    objectFit="cover"
                />
            </MenuItem>
        </NavBarContainer>
    );
};

const MenuItem = (
    {
        children,
        to = "/",
    } : {
        children: ReactNode,
        to?: string,
    }
) => {
    return (
        <Link href={to}>
            <Text display="block">
                {children}
            </Text>
        </Link>
    );
};

const NavBarContainer = (
    {
        children,
    }: {
        children: ReactNode,
    }
) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="flex-start"
            wrap="wrap"
            w="100%"
            bg="green.main"
            color="white"
        >
            {children}
        </Flex>
    );
};

export default Header;