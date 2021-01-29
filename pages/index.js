import Container from '../components/container';
import Head from 'next/head'
import Pets from '../components/pets';
const Index = () =>{
    return(
        <Container>
            <Head>
                <title>Home Pets</title>
            </Head>

            <Pets></Pets>
        </Container>
    )
}

export default Index;