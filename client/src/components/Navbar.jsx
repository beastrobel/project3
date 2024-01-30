import React from "react";
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
  Text,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Auth from "../components/utils/auth";

// Chakra UI Styling
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

// Navbar component
function Navbar() {
  // Function to determine the content of the navigation based on user authentication
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon=""
              variant="outline"
              sx={burgerStyles}
              _hover={{ bg: "purple.800" }}
              _active={{ bg: "purple.800" }}
            >
              <span className="material-symbols-outlined">account_circle</span>
            </MenuButton>
            <MenuList sx={burgerNavStyles}>
              <CustomLink to="/Dashboard">
                <MenuItem sx={burgerNavStyles} _hover={{ bg: "purple.900" }}>
                  My Profile
                </MenuItem>
              </CustomLink>
              <CustomLink to="/">
                <MenuItem
                  sx={burgerNavStyles}
                  _hover={{ bg: "purple.900" }}
                  onClick={() => Auth.logout()}
                >
                  Log Out
                </MenuItem>
              </CustomLink>
            </MenuList>
          </Menu>
        </>
      );
    } else {
      return (
        <CustomLink to="/Login">
          <Button colorScheme="teal" spacing="10px">
            Log In
          </Button>
        </CustomLink>
      );
    }
  }

  return (
    <Flex as="nav" sx={navStyles}>
      <Menu>
        {/* Hamburger menu */}
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          sx={burgerStyles}
          _hover={{ bg: "purple.800" }}
          _active={{ bg: "purple.800" }}
        />
        {/* Menu items */}
        <MenuList sx={burgerNavStyles}>
          <CustomLink to="/HTML">
            <MenuItem sx={burgerNavStyles} _hover={{ bg: "purple.900" }}>
              HTML
            </MenuItem>
          </CustomLink>
          <CustomLink to="/CSS">
            <MenuItem sx={burgerNavStyles} _hover={{ bg: "purple.900" }}>
              CSS
            </MenuItem>
          </CustomLink>
          <CustomLink to="/JavaScript">
            <MenuItem sx={burgerNavStyles} _hover={{ bg: "purple.900" }}>
              JavaScript
            </MenuItem>
          </CustomLink>
          <CustomLink to="/SQL">
            <MenuItem sx={burgerNavStyles} _hover={{ bg: "purple.900" }}>
              SQL
            </MenuItem>
          </CustomLink>
          <CustomLink to="/React">
            <MenuItem sx={burgerNavStyles} _hover={{ bg: "purple.900" }}>
              React
            </MenuItem>
          </CustomLink>
        </MenuList>
        {/* Logo */}
        <CustomLink to="/">
          <Flex>
            <Box>
              <Image src="/planetfavicon.png" sx={iconStyles} />
            </Box>
            <Box>
              <Heading display="flex" size="md" ml="20px">
                The Programmer's Guide <br /> to the Galaxy
              </Heading>
            </Box>
          </Flex>
        </CustomLink>
        {/* Spacer to push content to the right */}
        <Spacer />
        {/* Show navigation based on user authentication */}
        {showNavigation()}
      </Menu>
    </Flex>
  );
}

// CustomLink component for routing with Chakra UI Link
function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default Navbar;
