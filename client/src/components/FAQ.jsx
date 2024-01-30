import React, { useState } from "react";
import { Container, Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import questionSeeds from "../../../server/seeds/questionSeeds.json";

function FAQ() {
  // State for user comments and submitted comments
  const [comments, setComments] = useState(
    Array(questionSeeds.length).fill("")
  );
  const [submittedComments, setSubmittedComments] = useState([]);

  // Handle change in user comment input
  const handleCommentChange = (index, e) => {
    const newComments = [...comments];
    newComments[index] = e.target.value;
    setComments(newComments);
  };

  // Handle submission of user comments
  const handleSubmitComment = (index) => {
    const userComment = comments[index];

    // Update the submitted comments state
    setSubmittedComments((prevComments) => [
      ...prevComments,
      { questionIndex: index, comment: userComment },
    ]);

    // Further logic can be implemented here, like storing the comment or updating the UI.
    console.log(`User Comment for Question ${index}:`, userComment);
  };

  return (
    <Container size="md">
      <Heading as="h2" size="lg" mb={4}>
        FAQ
      </Heading>
      {/* Map through question seeds to render FAQ items */}
      {questionSeeds.map((item, index) => (
        <Box
          key={`${index}`}
          mt={4}
          borderWidth="1px"
          p={4}
          borderRadius="md"
          boxShadow="md"
        >
          {/* Display question text and author */}
          <Text fontWeight="bold">{item.questionText}</Text>
          <Text>{item.questionAuthor}</Text>

          {/* Comment section */}
          <Box mt={4} borderWidth="1px" p={4} borderRadius="md" boxShadow="md">
            <Text fontWeight="bold">Leave a Comment:</Text>
            {/* Input for user comments */}
            <Input
              placeholder="Type your comment here..."
              value={comments[index]}
              onChange={(e) => handleCommentChange(index, e)}
              mt={2}
            />
            {/* Button to submit comments */}
            <Button
              colorScheme="teal"
              mt={2}
              onClick={() => handleSubmitComment(index)}
            >
              Submit Comment
            </Button>

            {/* Display submitted comments for the current question */}
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
