import { IChildrenProps } from '@/types';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});




export const ApolloWrapper = ({ children }: IChildrenProps) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
