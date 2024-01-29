//Followed redux tutorial by Dave Gray and adapted it for this project

import { Container, Box, Heading, Text, Button, Image, Flex, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content)

    return (
        <section>
            <Heading>Ask a question</Heading><br/>
            <form>
                <label htmlFor="postTitle">Title:</label>
                <Input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                /><br/><br/>
                <label htmlFor="postContent">Question:</label>
                <Textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                /><br/><br/>
                <Button
                    colorScheme="purple"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Ask</Button>
            </form><br/>
            <Text>Your question will be posted on the homepage.</Text>
        </section>
    )
}
export default AddPostForm