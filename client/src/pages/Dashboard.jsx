import { Container, Box, Heading, Text, Button, Image, Flex, } from "@chakra-ui/react";
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../components/utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react";
import AddPostForm from "../components/posts/AddPostForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../components/users/usersSlice";

//Stripe
//const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

//Chakra UI Styling
const boxStyles = {
    bgColor: "teal.500",
    h: "300px",
    p: "50px",
};

const donateText = {
    size:"md",
    color: "white",
};

const profileStyles={
    w: "75%",
    h: "180px",
    p:"40px",
    bgColor:"white",
    pos: "absolute",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -70%)",
    borderRadius: "30px",
};

function Dashboard() {

    const users = useSelector(selectAllUsers);

    console.log(users);

    const { data, loading, error } = useQuery(QUERY_PROFILE, {
        variables: {
            username: users[0].username
        }
        });

       let user;

         if (data) {
             user = data.profile.username;
         }
        console.log(data);
         console.log(loading);
         console.log(error);
    
    // //Stripe
    // useEffect(() => {
    //     if (data) {
    //         stripePromise.then((res) => {
    //         res.redirectToCheckout({ sessionId: data.checkout.session });
    //         });
    //     }
    // }, [data]);

    return(
        <>
        <Box bgColor="gray.200" h="300px">
            <Container sx={profileStyles}>
                <Flex>
                    <Box>
                        <Image src="/user.png" w="100px" />
                    </Box>
                    <Box pl="30px">
                        <Heading>Hello {user} !</Heading>
                        <Link color="purple">Profile settings</Link>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Container size="md" py="50px">
            <AddPostForm /><br/>
        </Container>
        <Box sx={boxStyles}>
            <Container sx={donateText}>
                <Heading>Unlock new features!</Heading>
                <Text>For just $1 you can have access to quizzes and profile customization.</Text><br/>

                {/* Stripe */}
                <form action="/create-checkout-session" method="POST">
                    <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
                    <Button id="checkout-and-portal-button" type="submit" colorScheme="gray">Unlock <span className="material-symbols-outlined">key_vertical</span></Button>
                </form>

            </Container>
        </Box>   
        </>
    );
};

export default Dashboard;