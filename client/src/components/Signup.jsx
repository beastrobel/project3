import React, { useState } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./utils/auth";
import { ADD_PROFILE } from "./utils/mutations";

// Signup component
function Signup(props) {
  // State for form input
  const [formState, setFormState] = useState({ username: "", password: "" });
  // Mutation hook for adding a profile
  const [addProfile] = useMutation(ADD_PROFILE);
  // Navigation hook for redirection after successful signup
  const navigate = useNavigate();

  // Form submission handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform the mutation to add the profile
      const mutationResponse = await addProfile({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      console.log("success!");
      // Redirect to the login page after successful signup
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  // Input change handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Log formState for debugging purposes
  console.log(formState);

  return (
    <Container maxWidth="md" py="50px">
      <Heading>Sign Up</Heading>
      <br />
      <form onSubmit={handleFormSubmit}>
        {/* Input field for the username */}
        <div className="flex-row space-between my-2">
          <FormLabel as="label" htmlFor="username">
            Username:
          </FormLabel>
          <Input
            placeholder="username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <br />
        {/* Input field for the password */}
        <div className="flex-row space-between my-2">
          <FormLabel as="label" htmlFor="pwd">
            Password:
          </FormLabel>
          <Input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <br />
        {/* Submit button */}
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={props.isSubmitting}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}

export default Signup;
