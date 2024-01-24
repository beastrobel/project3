import { Container, Box, Heading, Text } from "@chakra-ui/react";

function Error () {

    const boxStyles = {
        p: "10px",
    }

    return(
      <Box as="section">
          <div className="hero-image">
              <div className="hero-text">
                  <Heading color="white">Error</Heading>
              </div>
          </div>
          <Container maxWidth="md" py="50px">
              <Text>The page you are looking for can't be found</Text>  
          </Container>      
      <Box sx={boxStyles}>
      </Box>
      </Box>
  )}

export default Error;