import { Container, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import Signup from "../components/Signup";
import FAQ from "../components/FAQ";
import { Link } from 'react-router-dom';
import PostsList from "../components/posts/PostsList";

//Chakra UI Styling
const heroBoxStyles = {
  bgGradient: "linear(to-tl, blue.900, purple.900)",
  h: "600px",
};

const heroTextStyles = {
  color: "white",
  fontSize: "5xl",
  pos: "absolute",
  left: "50%",
  top: "20%",
  transform: "translate(-50%, -50%)",
};

const imageStyles = {
  boxSize: "full",
  objectFit: "cover",
  opacity: "30%",
  blendMode: "hard light",
};

function Homepage() {
  const pages = ['HTML', 'CSS', 'JavaScript', 'SQL', 'React']

  function explore(max) {
  return Math.floor(Math.random() * max);
  }

  let randomPage = `/${pages[explore(5)]}`;
  console.log(randomPage) 
  
  return (
    <>
      <Box as="section" sx={heroBoxStyles}>
        <Image src="/andy-holmes-rCbdp8VCYhQ-unsplash.jpg" sx={imageStyles} />
        <Box sx={heroTextStyles}>
          <Heading size="2xl">Welcome to Your Coding Odyssey!🚀</Heading>
          <Text fontSize="18px">
            {" "}
            Clutch your metaphorical towel, and let's navigate the coding cosmos
            together. Don't panic; let's begin your coding journey!
          </Text>
          <Link to={randomPage}><Button colorScheme="purple" onClick={explore}>Explore<span className="material-symbols-outlined">rocket_launch</span></Button></Link>
        </Box>
      </Box>
      <Box as="section" bgColor="purple.800" color="white">
      <Signup />
      </Box>
      <Container as="section" size="md" mt="50px">
        <FAQ />
        <PostsList />
      </Container>
    </>
  );
}

export default Homepage;
