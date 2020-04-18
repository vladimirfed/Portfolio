import React , { Component} from 'react'
import { Form, Button, Container } from 'react-bootstrap'


export default class Contacts extends Component{
    render(){
        return(
            <Container>
                <h1 className="text-center">contact us</h1>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>email adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text>
                                we will never share your email to someone else
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Example taxtarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckBox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>

                    </Form>
            </Container >
        )
    }

}