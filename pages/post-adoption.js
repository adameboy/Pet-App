import Container from "../components/container";
import Head from 'next/head';
import Form from '../components/form-adoption'
const PostAdoption = ()=>{
    return (
        <Container>
            <Head>
                <title>Post Adoption</title>
            </Head>

            <div className="d-flex justify-content-center  mt-3">
                <h1 className="mt-3 mt-lg-4 text-center">Post your adoption</h1>
            </div>

            <Form></Form>
        </Container>
    )
}

export default PostAdoption;