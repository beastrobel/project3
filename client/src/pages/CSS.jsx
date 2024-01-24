import { Container, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

function CSS() {
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
          <Heading color="white">CSS</Heading>
        </div>
      </div>
      <Container maxWidth="md" py="50px">
        <Text>
          CSS, or Cascading Style Sheets, serves as the styling language in web
          development. Its primary role is to enhance the visual aesthetics of
          websites. CSS enables the precise control of HTML element appearance,
          layout structuring, responsiveness to diverse devices, incorporation
          of animations, and the establishment of modular and reusable styles.
          Essentially, CSS collaborates with HTML and JavaScript to ensure the
          creation of visually pleasing and well-designed web interfaces.
        </Text>
        <Text>
          CSS finds widespread use in creating controlled effects and flash
          animations, collaborating with dynamic web templates, optimizing
          social media styling, and various other applications.
        </Text>
      </Container>
      <Box sx={boxStyles}>
        <Link
          href="https://www.w3schools.com/css/tryit.asp?filename=trycss_intro"
          isExternal
          style={linkStyles}
        >
          <Button colorScheme="green" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
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

export default CSS;
