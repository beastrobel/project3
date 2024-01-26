import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Center,
  Image,
} from "@chakra-ui/react";
import Signup from "../components/Signup";
import FAQ from "../components/FAQ";

const heroBoxStyles = {
  bgGradient: "linear(to-tl, blue.900, purple.900)",
  h: "500px",
};

const heroTextStyles = {
  color: "white",
  fontSize: "5xl",
  pos: "absolute",
  left: "50%",
  transform: "translate(-50%, -450%)",
};

const textBoxStyles = {
  color: "white",
  fontSize: "xl",
  pos: "absolute",
  left: "50%",
  transform: "translate(-50%, -350%)",
  textAlign: "center",
};

const imageStyles = {
  boxSize: "full",
  objectFit: "cover",
  opacity: "30%",
  blendMode: "hard light",
};

function Homepage() {
  return (
    <>
      <Box as="section" sx={heroBoxStyles}>
        <Image src="/andy-holmes-rCbdp8VCYhQ-unsplash.jpg" sx={imageStyles} />
        <Heading sx={heroTextStyles}>Welcome to Your Coding Odyssey!🚀</Heading>
        <Text sx={textBoxStyles}>
          {" "}
          Clutch your metaphorical towel, and let's navigate the coding cosmos
          together. Don't panic; let's being your coding journey!
        </Text>
      </Box>
      <Box as="section" bgColor="purple.900" color="white">
        <Signup />
      </Box>
      <Container as="section" size="md" mt="50px">
        <FAQ />
      </Container>
    </>
  );
}

export default Homepage;
