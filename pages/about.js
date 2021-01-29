import Container from '../components/container';
import Form from '../components/form-adoption';
import {useState} from 'react';
const About = (props)=>{
const [data]= useState(JSON.parse(props.url.query.data) || {});
const [index] = useState(JSON.parse(props.url.query.index))
   return(
       <Container>
            <div className="d-flex justify-content-center">
                <h1 className='mt-3 mt-lg-4 text-center'>Edit pet information</h1>
            </div>

            <Form pet={data} index={index}></Form>
       </Container>
   )
}

export default About;