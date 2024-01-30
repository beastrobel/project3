import React, { useEffect } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../components/utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import AddPostForm from "../components/posts/AddPostForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../components/users/usersSlice";

// Chakra UI Styling
const boxStyles = {
  bgColor: "teal.500",
  h: "300px",
  p: "50px",
};

const donateTextStyles = {
  size: "md",
  color: "white",
};

const profileStyles = {
  w: "75%",
  h: "180px",
  p: "40px",
  bgColor: "white",
  pos: "absolute",
  left: "50%",
  top: "20%",
  transform: "translate(-50%, -70%)",
  borderRadius: "30px",
};

// Stripe
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function Dashboard() {
  // Redux state
  const users = useSelector(selectAllUsers);
  const { data, loading, error } = useQuery(QUERY_PROFILE, {
    variables: {
      username: users[0].username,
    },
  });

  let user;

  // Retrieve username from query data
  if (data) {
    user = data.profile.username;
  }

  // Logging query details
  console.log(data);
  console.log(loading);
  console.log(error);

  // Stripe
  // useEffect(() => {
  //     if (data) {
  //         stripePromise.then((res) => {
  //             res.redirectToCheckout({ sessionId: data.checkout.session });
  //         });
  //     }
  // }, [data]);

  return (
    <>
      {/* User profile section */}
      <Box bgColor="gray.200" h="300px">
        <Container sx={profileStyles}>
          <Flex>
            <Box>
              <Image src="/user.png" w="100px" />
            </Box>
            <Box pl="30px">
              <Heading>Hello {user}!</Heading>
              <Link color="purple">Profile settings</Link>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Container with post form */}
      <Container size="md" py="50px">
        <AddPostForm />
        <br />
      </Container>

      {/* Donation box section */}
      <Box sx={boxStyles}>
        <Container sx={donateTextStyles}>
          <Heading>Unlock new features!</Heading>
          <Text>
            For just $1 you can have access to quizzes and profile
            customization.
          </Text>
          <br />

          {/* Stripe form */}
          <form action="/create-checkout-session" method="POST">
            <input
              type="hidden"
              name="lookup_key"
              value="{{PRICE_LOOKUP_KEY}}"
            />
            <Button
              id="checkout-and-portal-button"
              type="submit"
              colorScheme="gray"
            >
              Unlock{" "}
              <span className="material-symbols-outlined">key_vertical</span>
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
