import { Container, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

function HTML() {
  const boxStyles = {
    p: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyles = {
    marginRight: "10px",
  };

  return (
    <Box as="section">
      <div className="hero-image">
        <div className="hero-text">
          <Heading color="white">HTML</Heading>
        </div>
      </div>
      <Container maxWidth="md" py="50px">
        <Text>
          HTML, or HyperText Markup Language, is the blueprint for web pages. It
          helps organize and describe content on the internet. With HTML, a user
          can structure text, create links, add images, and set up forms for
          user input. It's the foundation of web development, working together
          with CSS and JavaScript to make websites look good and interactive.
        </Text>
        <Text>
          Given that HTML is inherently text-based, editing an HTML file is
          easily done by opening it in programs such as Notepad++, Vi, or Visual
          Studio Code. HTML serves as the foundational building block for any
          online application.
        </Text>
      </Container>
      <Box sx={boxStyles}>
        <Link
          href="https://www.w3schools.com/tryit/tryit.asp?filename=tryhtml_hello"
          isExternal
          style={linkStyles}
        >
          <Button colorScheme="green" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          isExternal
          style={linkStyles}
        >
          <Button colorScheme="purple" size="lg">
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default HTML;
