import React, { useState } from "react";
import {
  Container,
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_PROFILE } from "./utils/mutations";
import Auth from "./utils/auth";
import { useDispatch } from "react-redux";
import { userAdded } from "./users/usersSlice";

// Styles for the login box
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
};

// Login component
function Login(props) {
  // Redux dispatch
  const dispatch = useDispatch();

  // State for form and mutation
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_PROFILE);

  // Form submit handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform login mutation
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });

      // Retrieve and store the token
      const token = mutationResponse.data.loginProfile.token;
      Auth.login(token);

      // Dispatch user information to Redux store
      if (formState.username) {
        console.log("Dispatching user:", formState.username);
        dispatch(userAdded(formState.username));
      }

      console.log("User:", formState.username);
    } catch (e) {
      console.log(e);
    }
  };

  // Handle input change
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
        {/* Close button */}
        <Link to="/">
          <span
            className="material-symbols-outlined"
            style={{ float: "right" }}
          >
            close
          </span>
        </Link>
        <br />
        {/* Login heading */}
        <Heading>Log In</Heading>
        <br />
        {/* Login form */}
        <form onSubmit={handleFormSubmit}>
          {/* Username input */}
          <div className="flex-row space-between my-2">
            <FormLabel as="label" htmlFor="username">
              Username:
            </FormLabel>
            <Input
              as="input"
              placeholder="username"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <br />
          {/* Password input */}
          <div className="flex-row space-between my-2">
            <FormLabel as="label" htmlFor="pwd">
              Password:
            </FormLabel>
            <Input
              as="input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <br />
          {/* Error message for invalid credentials */}
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          {/* Submit button */}
          <Button mt={4} colorScheme="teal" type="submit">
            Log In
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default Login;
