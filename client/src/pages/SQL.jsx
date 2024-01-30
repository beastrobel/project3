import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

// SQL component displaying information about SQL
function SQL() {
  // Styling objects for different elements
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
    objectFit: "cover",
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
      {/* Hero section with image and heading */}
      <Box sx={heroBoxStyles}>
        <Image src="/REACT.jpg" sx={imageStyles} />
        <Heading as="h1" sx={heroTextStyles}>
          SQL
        </Heading>
      </Box>

      {/* Container for text content */}
      <Container maxWidth="md" py="50px" sx={textBoxStyles}>
        {/* Text content with styles */}
        <Text>
          SQL is like the language databases understand. It helps manage data by
          fetching specific information (SELECT), changing data (INSERT, UPDATE,
          DELETE), setting up the database structure, controlling access, and
          ensuring consistency through transactions. In simple terms, SQL is the
          language for interacting with databases to organize and manipulate
          data.
        </Text>
        <Text mt="4">
          SQL is widely used for querying and modifying data in databases,
          defining structures, ensuring integrity, managing access, creating
          stored procedures, supporting data analysis, web development, and
          business intelligence. Its versatility makes it essential across
          various industries.
        </Text>
      </Container>

      {/* Box with links and buttons */}
      <Box sx={boxStyles}>
        {/* Link to SQLFiddle for trying SQL queries */}
        <Link
          href="https://sqlfiddle.com/mysql/online-compiler"
          isExternal
          style={linkStyles}
          target="blank"
        >
          <Button colorScheme="teal" size="lg">
            Try it!
          </Button>
        </Link>

        {/* Link to MySQL documentation for learning more about SQL */}
        <Link
          href="https://dev.mysql.com/doc/"
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

export default SQL;
