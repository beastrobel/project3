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
import { Field, Form, Formik } from 'formik';

function Signup () {
function validateUsername(value) {
 let error
 if (!value) {
   error = 'Username is required'
 } 
 return error
}

function validatePassword(value) {
   let error
   if (!value) {
     error = 'Password is required'
   }
   return error
 }

return(
   <Container maxWidth="md" py="50px">
   <Heading>Sign Up</Heading><br/>
   <Formik
   initialValues={{ username: '', password: '' }}
   onSubmit={(values, actions) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2))
       actions.setSubmitting(false)
     }, 1000)
   }}
 >
   {(props) => (
     <Form>
       <Field name='username' validate={validateUsername}>
         {({ field, form }) => (
           <FormControl isInvalid={form.errors.username && form.touched.username}>
             <FormLabel>Username</FormLabel>
               <Input {...field} placeholder='username ' />
             <FormErrorMessage>{form.errors.username}</FormErrorMessage>
           </FormControl>
         )}
       </Field><br/>
       <Field name='password' validate={validatePassword}>
         {({ field, form }) => (
           <FormControl isInvalid={form.errors.password && form.touched.password}>
             <FormLabel>Password</FormLabel>
               <Input {...field} placeholder='password' />
             <FormErrorMessage>{form.errors.password}</FormErrorMessage>
           </FormControl>
         )}
       </Field><br/>
       <Button
         mt={4}
         colorScheme='teal'
         isLoading={props.isSubmitting}
         type='submit'
       >
         Submit
       </Button>
     </Form>
   )}
 </Formik>
 </Container>
)
}

export default Signup;