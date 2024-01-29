import { Center, Box } from "@chakra-ui/react";

const footerStyles={
    p:"50px",
}

function Footer() {
    return(
        <Box as="footer" sx={footerStyles}>
            <Center>Developed by Micah Dershem-Hanchett, Joshua Garnaat, and Beatriz Strobel</Center>
        </Box> 
    );
}

export default Footer;