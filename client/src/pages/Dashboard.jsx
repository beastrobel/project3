import { Container, 
    Box, 
    Heading, 
    Text, 
    Button, 
    Link, 
    Center, 
    Image } from "@chakra-ui/react";
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../components/utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react";
import Question from "../components/Question"
//import { useUserContext } from '../components/utils/GlobalState';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const boxStyles = {
    bgColor: "teal.500",
    h: "300px",
    p: "50px",
};

const donateText = {
    size:"md",
    color: "white",
};

const heroBoxStyles= {
    bgColor: "black",
    h: "200px",
    position: "relative",

  };

  const imageStyles={
    boxSize: "full",
    objectFit: 'cover',
    opacity: "40%", 
    blendMode: "screen",
  };

  const profileStyles={
    w: "75%",
    h: "200px",
    p:"50px",
    bgColor:"white",
    pos: "absolute",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -40%)",
    borderRadius: "30px",
  };

function Dashboard() {
    // const [state] = useUserContext();
    const { data } = useQuery(QUERY_PROFILE);
        let profile;
        
        if (data) {
            profile = data.profile;
          }
        console.log(profile);
        console.log(data);
    
    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
        }, [data]);

    return(
        <>
        <Box bgColor="gray.200" h="300px">
        <Container sx={profileStyles}>
        <Heading>Hello {/* {profile.username} */}!</Heading><br/>
        <Text fontSize="18px">You are on light mode.<span className="material-symbols-outlined">light_mode</span></Text>
        </Container>
        </Box>
        <Question />
        <Box sx={boxStyles}>
            <Container sx={donateText}>
            <Heading>Unlock new features!</Heading>
            <Text>For just $1 a month, you will have unlimited access to quizzes and profile customization!</Text><br/>
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