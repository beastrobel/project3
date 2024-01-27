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
// import { useUserContext } from '../components/utils/GlobalState';

function Dashboard() {
    // const [state] = useUserContext();
    const { data } = useQuery(QUERY_PROFILE);
        let profile;
        
        if (data) {
            profile = data.profile;
          }
        console.log(profile);

    return(
        <>
        <Container maxWidth="md" py="50px">
        <Heading>Hello!</Heading>
        </Container>
        </>
    );
};

export default Dashboard;