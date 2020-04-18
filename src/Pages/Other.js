import React , { Component} from 'react'
import {  Row, Col, Container, Media, Card, ListGroup } from 'react-bootstrap'

export default class Other extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="mg-5">
                            <img 
                            width={150} 
                            height={150} 
                            className="mr-3" 
                            src="https://images.pexels.com/photos/3577981/pexels-photo-3577981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                            />
                            <Media.Body>
                                <h5> Blog post</h5>
                                <p>blabla some text about smthng</p>
                            </Media.Body>
                        </Media>

                        <Media>
                            <img 
                            width={150} 
                            height={150} 
                            className="mr-3" 
                            src="https://images.pexels.com/photos/3577981/pexels-photo-3577981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                            />
                            <Media.Body>
                                <h5> Blog post</h5>
                                <p>blabla some text about smthng</p>
                            </Media.Body>
                        </Media>

                        <Media>
                            <img 
                            width={150} 
                            height={150} 
                            className="mr-3" 
                            src="https://images.pexels.com/photos/3577981/pexels-photo-3577981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                            />
                            <Media.Body>
                                <h5> Blog post</h5>
                                <p>blabla some text about smthng</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Category</h5>
                        <Card>
                            <ListGroup variant="flash">
                                <ListGroup.Item>category 1</ListGroup.Item>
                                <ListGroup.Item>category 2</ListGroup.Item>
                                <ListGroup.Item>category 3</ListGroup.Item>
                                <ListGroup.Item>category 4</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card class ="mt-3 bg-light">
                            <Card.Body>
                                <Card.Body>
                                    <Card.Title>Side Widget</Card.Title>
                                    <Card.Text>
                                        something bla bla
                                    </Card.Text>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}