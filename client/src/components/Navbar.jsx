import { 
    Flex, 
    Heading, 
    Menu, 
    MenuItem, 
    MenuButton, 
    IconButton, 
    MenuList, 
    Spacer, 
    Button,
    Image,
    Box,
    } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Auth from "../components/utils/auth";

//Chakra UI Styling
const navStyles = {
    p: "10px",
    alignItems: "center",
    bgColor: "gray.900",
    color: "white",
};

const iconStyles = {
    h: "45px", 
    w: "45px", 
};

const burgerStyles = {
    color: "white",
    border: "none",
};

const burgerNavStyles = {
    bgColor: "purple.800",
    border: "none",
};

function Navbar() {

    return (
        <Flex as="nav" sx ={navStyles}>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    sx={burgerStyles}
                    _hover= {{bg: "purple.800"}}
                    _active= {{bg: "purple.800"}}
                />
                <MenuList sx={burgerNavStyles} >
                    <Link to="/HTML"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>HTML</MenuItem></Link>
                    <Link to="/CSS"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>CSS</MenuItem></Link>
                    <Link to="/JavaScript"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>JavaScript</MenuItem></Link>
                    <Link to="/SQL"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>SQL</MenuItem ></Link>
                    <Link to="/React"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>React</MenuItem></Link>
                </MenuList>
                <Link to="/">
                    <Flex>
                        <Box>
                            <Image src="/planetfavicon.png" sx={iconStyles} />
                        </Box> 
                        <Box>
                            <Heading display="flex" size="md" ml="20px">The Programmer's Guide <br/>to the Galaxy</Heading>
                        </Box>   
                    </Flex>    
                </Link>
                <Spacer />
                {
                Auth.loggedIn() ? (
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon=""
                            variant='outline'
                            sx={burgerStyles}
                            _hover= {{bg: "purple.800"}}
                            _active= {{bg: "purple.800"}}
                            >
                            <span className="material-symbols-outlined">account_circle</span>
                        </MenuButton>
                        <MenuList sx={burgerNavStyles} >
                            <Link to="/Dashboard"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>My Profile</MenuItem></Link>
                            <Link to="/"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}} onClick={() => Auth.logout()}>Log Out</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    ) : (
                        <Link to="/Login"><Button colorScheme="teal" spacing="10px">Log In</Button></Link>
                    )
                }
            </Menu>
        </Flex>
    )
}

export default Navbar;

