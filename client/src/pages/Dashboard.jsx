import { Container, Box, Heading, Text, Button, Image, Flex, } from "@chakra-ui/react";
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../components/utils/queries';
import Question from "../components/Question";

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

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_QUESTIONS);
    const questions = data?.questions || [];

    let user = localStorage.getItem('username');

    return(
        <>
        <Box bgColor="gray.200" h="300px">
            <Container sx={profileStyles}>
                <Flex>
                    <Box>
                        <Image src="/user.png" w="100px" />
                    </Box>
                    <Box pl="30px">
                        <Heading>Hello {user}!</Heading>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Container size="md" py="50px">
            <Question questions={questions}/><br/>
        </Container>
        <Box sx={boxStyles}>
            <Container sx={donateText}>
                <Heading>Unlock new features!</Heading>
                <Text>For just $1 you can have access to quizzes and profile customization.<br/>(Future Development)</Text><br/>
                    <Button colorScheme="gray">Unlock <span className="material-symbols-outlined">key_vertical</span></Button>
            </Container>
        </Box>   
        </>
    );
};

export default Dashboard;