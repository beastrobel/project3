import { Container, Box, Heading, Text, Button, Link, Image } from "@chakra-ui/react";

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
    opacity: "40%", 
    blendMode: "screen",
  }

  return (
    <Box as="section">
      <Box sx={heroBoxStyles}>
          <Image src="/JS.jpg" sx={imageStyles} />
          <Heading as="h1" sx={heroTextStyles}>JavaScript</Heading>
      </Box>  
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
          target="blank"
        >
          <Button colorScheme="teal" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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

export default JavaScript;
