import { Container, Box, Heading, Text, Button, Link, Center } from "@chakra-ui/react";
import Signup from "../components/Signup";
import FAQ from "../components/FAQ";

const heroBoxStyles= {
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    h: "900px",
}

const signupStyles= {
    bgColor: "white",
    borderRadius: "30px",
    h: "500px",
    p: "50px",
    fontSize: "5xl",
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

function Homepage () {

    return(
        <>
        <Box as="section" sx={heroBoxStyles}>
            <Box sx={signupStyles}>
            <Signup  />
            </Box>
        </Box>  
        <Box as="section">
        <Text></Text>
        </Box>
        </>
    )
}

export default Homepage;
