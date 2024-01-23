import { Container, Box, Heading, Text } from "@chakra-ui/react";

function ReactComponent() {
  const boxStyles = {
    p: "10px",
  };

  return (
    <Box as="section">
      <div className="hero-image">
        <div className="hero-text">
          <Heading color="white">React</Heading>
        </div>
      </div>
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
        <Link
          href="https://react.dev/learn"
          isExternal
        >
          <Button colorScheme="Pink" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://react.dev/"
          isExternal
        >
          <Button colorScheme="purple" size="lg">
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ReactComponent;