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
    HStack,
    Image,
    Text,
    Box,
    } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const navStyles = {
    p: "10px",
    alignItems: "center",
    bgColor: "gray.900",
    color: "white",
};

const iconStyles = {
    h: "45px", 
    w: "45px", 
    display: "flex",
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

    const pages = ['HTML', 'CSS', 'JavaScript', 'SQL', 'React']

    function explore(max) {
    return Math.floor(Math.random() * max);
    }

    let randomPage = `/${pages[explore(5)]}`;
    console.log(randomPage) 

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
                    <CustomLink to="/HTML"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>HTML</MenuItem></CustomLink>
                    <CustomLink to="/CSS"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>CSS</MenuItem></CustomLink>
                    <CustomLink to="/JavaScript"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>JavaScript</MenuItem></CustomLink>
                    <CustomLink to="/SQL"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>SQL</MenuItem ></CustomLink>
                    <CustomLink to="/React"><MenuItem sx={burgerNavStyles} _hover= {{bg: "purple.900"}}>React</MenuItem></CustomLink>
            </MenuList>
            <CustomLink to="/">
                <Flex>
                    <Box>
                        <Image src="/planetfavicon.png" sx={iconStyles} />
                    </Box> 
                    <Box>
                        <Heading display="flex" size="md" ml="20px">The Programmer's Guide <br/>to the Galaxy</Heading>
                    </Box>   
                </Flex>    
            </CustomLink>
            
            <Spacer />

            <HStack spacing="10px">
            <Link to={randomPage}><Button colorScheme="purple" onClick={explore}>Explore<span className="material-symbols-outlined">rocket_launch</span></Button></Link>
            <CustomLink to="/Login"><Button colorScheme="teal" spacing="10px">Login</Button></CustomLink>
            </HStack>

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

