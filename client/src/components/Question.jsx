  import { Container,
    Heading,
    Input, 
    Button, } from "@chakra-ui/react";
  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { useMutation, useQuery } from '@apollo/client';
  import { ADD_QUESTION } from './utils/mutations';
  import { QUERY_ME, QUERY_QUESTIONS } from "./utils/queries";
  import Auth from "./utils/auth";
  
  const Question = (props) => {
    const [questionText, setQuestionText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addQuestion] = useMutation(ADD_QUESTION, {
      update(cache, { data: { addQuestion } }) {
        try {
          const { questions } = cache.readQuery({ query: QUERY_QUESTIONS });

          cache.writeQuery({
            query: QUERY_QUESTIONS,
            data: { questions: [addQuestion, ...questions]},
          });
        } catch(e) {
          console.error(e);
        }

        const { me } = cache.readQuery({ query: QUERY_ME});
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, questions: [...me.questions, addQuestion] } },
        });
      },
    });

    //const [formState, setFormState] = useState({ questionText: ''});
    
    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try{
        const { data } = await addQuestion({
          variables: {
            questionText,
            questionAuthor: Auth.getProfile().data.username,
          },
        });
        setQuestionText('');
      } catch(err) {
        console.error(err)
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      
      if (name === 'questionText' && value.length <= 280) {
        setQuestionText(value);
        setCharacterCount(value.length);
      }
    };
    //console.log(formState);
  
    return (
      <Container size="md" py="50px">
      <Heading>Ask a question:</Heading><br/>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <Input
              name="questionText"
              placeholder="..."
              value={questionText}              
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
  