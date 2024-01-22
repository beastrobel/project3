import { Container, Box, Heading, Text } from "@chakra-ui/react";

function JavaScript () {

    const boxStyles = {
        p: "10px",
    }

    return(
        <Box as="section">
            <div className="hero-image">
                <div className="hero-text">
                    <Heading color="white">JavaScript</Heading>
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

export default JavaScript;