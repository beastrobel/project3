import { Container, Box, Heading, Text, Button, Link } from "@chakra-ui/react";

function JavaScript() {
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
          <Heading color="white">JavaScript</Heading>
        </div>
      </div>
      <Container maxWidth="md" py="50px">
        <Text>
          JavaScript is a coding language mainly used for making websites
          interactive and dynamic. It works on the user's web browser and does
          things like responding to clicks, changing webpage content on the fly,
          and handling data. It makes websites more engaging and responsive by
          adding cool features that users can interact with, like buttons and
          forms. JavaScript is a key player in making websites not just static
          pages, but lively and interactive ones.
        </Text>
        <Text>
          JavaScript boasts a wide array of applications, serving diverse
          purposes in website development, crafting single-page applications,
          enhancing interactive user experiences, implementing serverless
          functions, and much more.
        </Text>
      </Container>
      <Box sx={boxStyles}>
        <Link
          href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_editor"
          isExternal
          style={linkStyles}
        >
          <Button colorScheme="green" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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

export default JavaScript;
