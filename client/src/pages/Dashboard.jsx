import { Container, 
    Box, 
    Heading, 
    Text, 
    Button, 
    Link, 
    Center, 
    Image } from "@chakra-ui/react";


function Dashboard (props) {

    return(
        <>
        <Container maxWidth="md" py="50px">
        <Heading>Hello, {props.username}!</Heading>
        </Container>
        </>
    )
}

export default Dashboard;