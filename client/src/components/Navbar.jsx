import { 
    Flex, 
    Heading, 
    Menu, 
    MenuItem, 
    MenuButton, 
    IconButton, 
    MenuList, 
    Spacer, 
    Button 
    } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <CustomLink to="/HTML"><MenuItem>HTML</MenuItem></CustomLink>
                    <CustomLink to="/CSS"><MenuItem>CSS</MenuItem></CustomLink>
                    <CustomLink to="/JavaScript"><MenuItem>JavaScript</MenuItem></CustomLink>
                    <CustomLink to="/MySQL"><MenuItem>MySQL</MenuItem></CustomLink>
                    <CustomLink to="/React"><MenuItem>React</MenuItem></CustomLink>
            </MenuList>
            <CustomLink to="/"><Heading size="md" ml="10px">The Programmer's Guide to the Galaxy</Heading></CustomLink>
            <Spacer />

            <Button colorScheme="purple">Explore</Button>
            <Button colorScheme="gray">Login</Button>


            </Menu>

        </Flex>
    )

}

function CustomLink({ to, children, ...props}) {
        return (
            <Link to={to} {...props}>
                {children}
            </Link>
        )
}

export default Navbar;

