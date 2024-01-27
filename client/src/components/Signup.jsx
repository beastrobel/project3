import { Container, 
  Box, 
  Heading, 
  Text,
  Input, 
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from './utils/auth';
import { ADD_PROFILE } from './utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addProfile] = useMutation(ADD_PROFILE);

  const navigate = useNavigate();
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
    const mutationResponse = await addProfile({
      variables: {
        username: formState.username,
        password: formState.password,
      },
    });
    console.log('success!')
    navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  console.log(formState);

  return (
    <Container maxWidth="md" py="50px">
    <Heading>Sign Up</Heading><br/>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <FormLabel as="label" htmlFor="username">Username:</FormLabel>
          <Input
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div><br/>
        <div className="flex-row space-between my-2">
          <FormLabel as="label" htmlFor="pwd">Password:</FormLabel>
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div><br/>
        <Button
         mt={4}
         colorScheme='teal'
         isLoading={props.isSubmitting}
         type='submit'
       >
         Submit
       </Button>
      </form>
      </Container>
  );
}

export default Signup;
