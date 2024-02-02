import { useState } from "react";
import { Container, Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import questionSeeds from "../../../server/seeds/questionSeeds.json";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_COMMENT } from "./utils/mutations";
import Auth from './utils/auth';
import { QUERY_QUESTIONS } from "./utils/queries";

const FAQ = () => {
  const [comments, setComments] = useState(
    Array(questionSeeds.length).fill("")
  );
  const [submittedComments, setSubmittedComments] = useState([]);
  const [addComment] = useMutation(ADD_COMMENT);

  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];
  


  const handleCommentChange = (index, e) => {
    const newComments = [...comments];
    newComments[index] = e.target.value;
    setComments(newComments);
  };

  const handleSubmitComment = async (index, event) => {
    event.preventDefault();
    // Implement logic to handle the user's comment for a specific question
    const userComment = comments[index];

    try {
      const { data } = await addComment({
        variables: {
          questionId: questions[index]._id,
          commentText: userComment,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
    } catch(err) {
      console.error(err);
    }

    // Update the submitted comments state
    setSubmittedComments((prevComments) => [
      ...prevComments,
      { questionIndex: index, comment: userComment },
    ]);

    // You can implement further logic here, like storing the comment or updating the UI.
    console.log(`User Comment for Question ${index}:`, userComment);
  };

  return (
    <Container size="md">
      <Heading as="h2" size="lg" mb={4}>
        FAQ
      </Heading>
      {questions.map((item, index) => (
        <Box
          key={`${index}`}
          mt={4}
          borderWidth="1px"
          p={4}
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontWeight="bold">{item.questionText}</Text>
          <Text>{item.questionAuthor}</Text>

          <Box mt={4} borderWidth="1px" p={4} borderRadius="md" boxShadow="md">
            <Text fontWeight="bold">Leave a Comment:</Text>
            <Input
              placeholder="Type your comment here..."
              value={comments[index]}
              onChange={(e) => handleCommentChange(index, e)}
              mt={2}
            />
            <Button
              colorScheme="teal"
              mt={2}
              onClick={(e) => handleSubmitComment(index, e)}
            >
              Submit Comment
            </Button>

            {item.comments.map((c, i) => {
              if (item) {
                return (
                  <Box
                    key={`comment_${i}`}
                    mt={4}
                    borderWidth="1px"
                    p={4}
                    borderRadius="md"
                    boxShadow="md"
                  >
                    <Text>{c.commentAuthor} Responded:</Text>
                    <Text>{c.commentText}</Text>
                  </Box>
                );
              }
              return null;
            })}
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default FAQ;
