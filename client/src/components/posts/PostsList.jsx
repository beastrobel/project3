//Followed redux tutorial by Dave Gray and adapted it for this project
import { Container, Box, Heading, Text, Button, Image, Flex, } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const boxStyles={
    mt:'20px',
    borderWidth:"2px",
    p:'20px',
    borderRadius:"md",
    boxShadow:"md",
}

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort()

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <Container size="md">
            <Box sx={boxStyles}>
            <Heading size="sm">{post.title}</Heading>
            <Text>{post.content.substring(0, 100)}</Text>
            <Text className="postCredit">
            </Text>
            </Box>
            </Container>
        </article>
    ))

    return (
        <section>
            {renderedPosts}
        </section>
    )
}
export default PostsList