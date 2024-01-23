import { Container, Box, Heading, Text } from "@chakra-ui/react";

function NotFound () {

    const boxStyles = {
        p: "10px",
    }

    return(
        <Box as="section">
            <Container maxWidth="md" py="50px">
                <Heading>404 Error</Heading>  
            </Container>      
        </Box>
    )
}

export default NotFound;