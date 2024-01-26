import { Container, 
    Box, 
    Heading, 
    Text, 
    Button, 
    Link, 
    Center, 
    Image } from "@chakra-ui/react";


import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_PROFILE } from '../components/utils/queries';



const Dashboard = () => {
    const { profileId } = useParams();

    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { profileId: profileId },
    });

    const profile = data?.profiles || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <Container maxWidth="md" py="50px">
        <Heading>Hello, {profile.username}!</Heading>
        </Container>
        </>
    );
};

export default Dashboard;