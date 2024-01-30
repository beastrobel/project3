import React, { useState } from "react";
import { Container, Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_QUESTION } from "./utils/mutations";

// Question component
function Question(props) {
  // State for form input
  const [formState, setFormState] = useState({ questionText: "" });
  // Mutation hook for adding a question
  const [addQuestion] = useMutation(ADD_QUESTION);

  // Form submission handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Perform the mutation to add the question
      const mutationResponse = await addQuestion({
        variables: {
          questionText: formState.questionText,
        },
      });
      console.log("success!");
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
    <Container size="md" py="50px">
      <Heading>Ask a question:</Heading>
      <br />
      <form onSubmit={handleFormSubmit}>
        {/* Input field for the question text */}
        <div className="flex-row space-between my-2">
          <Input
            placeholder="..."
            name="questionText"
            type="text"
            id="questionText"
            onChange={handleChange}
          />
        </div>
        {/* Submit button */}
        <Button
          mt={4}
          colorScheme="purple"
          isLoading={props.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Question;
