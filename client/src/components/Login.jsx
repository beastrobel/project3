import { Container, 
  Box, 
  Menu,
  Heading, 
  Text,  
  Input, 
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
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

const Login = (props) => {

  function validateUsername(value) {
    let error
    if (!value) {
      error = 'Username is required'
    } 
    return error
  }

  function validatePassword(value) {
      let error
      if (!value) {
        error = 'Password is required'
      }
      return error
    }

  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { username: formState.username, password: formState.password },
      });
    
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      username: '',
      password: '',
    });
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
    <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }, 1000)
    }}
  >
    {(props) => (
      <Form  onSubmit={handleFormSubmit} >
        <Field name='username' validate={validateUsername}>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.username && form.touched.username}>
              <FormLabel>Username</FormLabel>
                <Input {...field}
                  placeholder='username' />
              <FormErrorMessage>{form.errors.username}</FormErrorMessage>
            </FormControl>
          )}
        </Field><br/>
        <Field name='password' validate={validatePassword}>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.password && form.touched.password}>
              <FormLabel>Password</FormLabel>
                <Input {...field} 
                  placeholder='password' />
              <FormErrorMessage>{form.errors.password}</FormErrorMessage>
            </FormControl>
          )}
        </Field><br/>
        <Button
          mt={4}
          colorScheme='teal'
          isLoading={props.isSubmitting}
          type='submit'>                    
          Log In
        </Button>
      </Form>
    )}
  </Formik>
  </Container>
  </Box>
    )
}


export default Login;