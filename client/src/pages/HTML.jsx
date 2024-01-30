import { Container, Box, Heading, Text, Button, Link, Image } from "@chakra-ui/react";

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

  const heroBoxStyles = {
    bgColor: "black",
    h: "300px",
    position: "relative",
  };

  const heroTextStyles = {
    color: "white",
    fontSize: "5xl",
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  const imageStyles = {
    boxSize: "full",
    objectFit: 'cover',
    opacity: "40%", 
    blendMode: "screen",
  };


  const textBoxStyles = {

    background: "linear-gradient(to right, #8B5CF6, #9333EA)",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
    color: "white", 
  };

  return (
    <Box as="section">
      <Box sx={heroBoxStyles}>
        <Image src="/HTML.jpg" sx={imageStyles} />
        <Heading as="h1" sx={heroTextStyles}>
          HTML
        </Heading>
      </Box>
      <Container maxWidth="md" py="50px" sx={textBoxStyles}>
        {/* Styles applied to the text box */}
        <Text>
          HTML, or HyperText Markup Language, is the blueprint for web pages. It
          helps organize and describe content on the internet. With HTML, a user
          can structure text, create links, add images, and set up forms for
          user input. It's the foundation of web development, working together
          with CSS and JavaScript to make websites look good and interactive.
        </Text>
        <Text mt="4">
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
          target="blank"
        >
          <Button colorScheme="teal" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          isExternal
          style={linkStyles}
          target="blank"
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
