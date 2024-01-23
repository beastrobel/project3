import { Container, Box, Heading, Text } from "@chakra-ui/react";

function MySQL() {
  const boxStyles = {
    p: "10px",
  };

  return (
    <Box as="section">
      <div className="hero-image">
        <div className="hero-text">
          <Heading color="white">SQL</Heading>
        </div>
      </div>
      <Container maxWidth="md" py="50px">
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
      <Box sx={boxStyles}>
        <Link
          href="https://sqlfiddle.com/mysql/online-compiler"
          isExternal
        >
          <Button colorScheme="Pink" size="lg">
            Try it!
          </Button>
        </Link>
        <Link
          href="https://dev.mysql.com/doc/"
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

export default MySQL;
