import { Outlet } from 'react-router-dom';
import { ApolloClient , InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource-variable/figtree';
import '@fontsource/audiowide';
import { setContext } from '@apollo/client/link/context';
import theme from './components/Theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { UserProvider } from './components/utils/GlobalState';

const httpLink = createHttpLink({
    uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={client}>
            <UserProvider>
                <Navbar/>
                <div className='container'>
                    <Outlet />
                </div>
                <Footer/>
                </UserProvider>
            </ApolloProvider>
        </ChakraProvider >
    );    
}

export default App;
