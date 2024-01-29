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
  import { Link } from 'react-router-dom';
  import { useMutation } from '@apollo/client';
  import { ADD_QUESTION } from './utils/mutations';
  
  function Question(props) {
    const [formState, setFormState] = useState({ questionText: ''});
    const [addQuestion] = useMutation(ADD_QUESTION);
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
      const mutationResponse = await addQuestion({
        variables: {
          questionText: formState.questionText,
        },
      });
      console.log('success!')
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
      <Container size="md" py="50px">
      <Heading>Ask a question:</Heading><br/>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <Input
              placeholder="..."
              name="questionText"
              type="text"
              id="questionText"
              onChange={handleChange}
            />
          </div>
          <Button
           mt={4}
           colorScheme='purple'
           isLoading={props.isSubmitting}
           type='submit'
         >
           Submit
         </Button>
        </form>
        </Container>
    );
  }
  
  export default Question;
  