import { Container, Box, Heading, Text, Button, Link, Center } from "@chakra-ui/react";

const heroBoxStyles= {
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    h: "900px",
}

const heroTextStyles= {
    color: "white",
    fontSize: "6xl",
    pt: "350px",
}

function Homepage () {

    return(
        <Box as="section" sx={heroBoxStyles}>
            <Center as="h1" sx={heroTextStyles}>Homepage</Center>
        </Box>  
    )
}

export default Homepage;
