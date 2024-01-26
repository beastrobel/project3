import { useState } from "react";
import { Container, Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import questionSeeds from "../../../server/seeds/questionSeeds.json";

function FAQ() {
  const [comments, setComments] = useState(
    Array(questionSeeds.length).fill("")
  );
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleCommentChange = (index, e) => {
    const newComments = [...comments];
    newComments[index] = e.target.value;
    setComments(newComments);
  };

  const handleSubmitComment = (index) => {
    // Implement logic to handle the user's comment for a specific question
    const userComment = comments[index];

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
      {questionSeeds.map((item, index) => (
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
              onClick={() => handleSubmitComment(index)}
            >
              Submit Comment
            </Button>

            {submittedComments.map((submittedComment, i) => {
              if (submittedComment.questionIndex === index) {
                return (
                  <Box
                    key={`comment_${i}`}
                    mt={4}
                    borderWidth="1px"
                    p={4}
                    borderRadius="md"
                    boxShadow="md"
                  >
                    <Text fontWeight="bold">User Comment:</Text>
                    <Text>{submittedComment.comment}</Text>
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
