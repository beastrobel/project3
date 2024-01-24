import { Container, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

function Homepage () {

    const boxStyles = {
        p: "10px",
    }

    return(
        <Box as="section">
            <div className="hero-image">
                <div className="hero-text">
                    <Heading color="white">Homepage</Heading>
                </div>
            </div>
            <Container maxWidth="md" py="50px">
                <Text>Lorem Ipsum</Text>  
            </Container>      
        <Box sx={boxStyles}>
        </Box>
        </Box>
    )
}

export default Homepage;