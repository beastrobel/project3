import { Container, 
  Box, 
  Heading, 
  Input, 
  Button,
  FormLabel,
 } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_PROFILE } from './utils/mutations';
import Auth from './utils/auth';

const loginStyles = {
  bgColor: "purple.800",
  w: "105vw",
  h: "2000px",
  pt: "100px",
  pl: "50px",
  pr: "50px",
  pos: "absolute",
  transform: "translate(0%,-7%)",
  color: "white", 
}

function Login(props) {

  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
         variables: {username: formState.username, password: formState.password},
      });
      const token = mutationResponse.data.loginProfile.token;
      Auth.login(token);
      localStorage.setItem('username', formState.username);
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

  return (
    <Box sx={loginStyles}>
      <Container maxWidth="md" py="50px">
      <Link to="/"><span className="material-symbols-outlined" style={{'float':'right'}}>close</span></Link><br/>
      <Heading>Log In</Heading><br/>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <FormLabel as="label" htmlFor="username">Username:</FormLabel>
            <Input as="input"
              placeholder="username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div><br/>
          <div className="flex-row space-between my-2">
            <FormLabel as="label" htmlFor="pwd">Password:</FormLabel>
            <Input as="input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div><br/>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            >                    
            Log In
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Login;
