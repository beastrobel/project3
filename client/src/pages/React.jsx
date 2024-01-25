import { Container, Box, Heading, Text, Button, Link, Image } from "@chakra-ui/react";

function ReactComponent() {
  const boxStyles = {
    p: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyles = {
    marginRight: "10px",
  };

  const heroBoxStyles= {
    bgColor: "black",
    h: "300px",
    position: "relative",

  };

  const heroTextStyles= {
    color: "white",
    fontSize: "5xl",
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  const imageStyles={
    boxSize: "full",
    objectFit: 'cover',
    opacity: "60%", 
    blendMode: "screen",
  }

  return (
    <Box as="section">
      <Box sx={heroBoxStyles}>
          <Image src="/REACT.jpg" sx={imageStyles} />
          <Heading as="h1" sx={heroTextStyles}>React</Heading>
      </Box>  
      <Container maxWidth="md" py="50px">
        <Text>
          React is a JavaScript library for building user interfaces. Developed
          by Facebook, React allows developers to create reusable UI components
          that efficiently update and render in response to changes in data. It
          follows a declarative approach, where developers describe how the UI
          should look based on the application's state, and React takes care of
          updating the DOM to match that state.
        </Text>
        <Text>
          React is often used in conjunction with other libraries or frameworks
          (such as Redux for state management) to build scalable and
          maintainable applications. It's widely adopted in the development
          community for creating dynamic and responsive user interfaces.
        </Text>
      </Container>
      <Box sx={boxStyles}>
        <Link href="https://react.dev/learn" isExternal style={linkStyles} target="blank">
          <Button colorScheme="teal" size="lg">
            Try it!
          </Button>
        </Link>
        <Link href="https://react.dev/" isExternal style={linkStyles} target="blank">
          <Button colorScheme="purple" size="lg">
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ReactComponent;
