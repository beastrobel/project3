import React from "react";
import { Center, Box } from "@chakra-ui/react";

// Styling for the footer
const footerStyles = {
  p: "50px",
};

// Footer component
function Footer() {
  return (
    // Box component as the footer with specified styles
    <Box as="footer" sx={footerStyles}>
      {/* Center component to horizontally center the content */}
      <Center>
        {/* Developer information */}
        Developed by Micah Dershem-Hanchett, Joshua Garnaat, and Beatriz Strobel
      </Center>
    </Box>
  );
}

export default Footer;
