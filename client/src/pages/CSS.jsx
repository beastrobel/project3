import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

// Define Chakra UI styling objects
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
  transform: "translate(-50%, -50%)",
};

const imageStyles = {
  boxSize: "full",
  objectFit: "cover",
  opacity: "40%",
  blendMode: "screen",
};

function CSS() {
  // Define styles for the text box
  const textBoxStyles = {
    background: "linear-gradient(to right, #8B5CF6, #9333EA)",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
    color: "white",
  };

  return (
    <Box as="section">
      {/* Hero section with image and heading */}
      <Box sx={heroBoxStyles}>
        <Image src="/CSS.png" sx={imageStyles} />
        <Heading as="h1" sx={heroTextStyles}>
          CSS
        </Heading>
      </Box>

      {/* Container for text content */}
      <Container maxWidth="md" py="50px" sx={textBoxStyles}>
        {/* Text content with styles */}
        <Text>
          CSS, or Cascading Style Sheets, serves as the styling language in web
          development. Its primary role is to enhance the visual aesthetics of
          websites. CSS enables the precise control of HTML element appearance,
          layout structuring, responsiveness to diverse devices, incorporation
          of animations, and the establishment of modular and reusable styles.
          Essentially, CSS collaborates with HTML and JavaScript to ensure the
          creation of visually pleasing and well-designed web interfaces.
        </Text>
        <Text mt="4">
          CSS finds widespread use in creating controlled effects and flash
          animations, collaborating with dynamic web templates, optimizing
          social media styling, and various other applications.
        </Text>
      </Container>

      {/* Box with links and buttons */}
      <Box sx={boxStyles}>
        {/* Link to W3Schools */}
        <Link
          href="https://www.w3schools.com/css/tryit.asp?filename=trycss_intro"
          isExternal
          style={linkStyles}
          target="blank"
        >
          <Button colorScheme="teal" size="lg">
            Try it!
          </Button>
        </Link>

        {/* Link to MDN Web Docs */}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
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

export default CSS;
