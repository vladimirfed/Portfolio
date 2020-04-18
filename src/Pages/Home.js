import React , { Component} from 'react'
import CarouselBox from '../Components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'
import {  Container, CardDeck, Card, Button } from 'react-bootstrap'

export default class Home extends Component{
    render(){
        return(
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our product</h2>
                    <CardDeck className="m-1">
                        <Card bg="info" border="info" text="light">
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            <Card.Body>
                                <Card.Title> Types of products</Card.Title>
                                <Card.Text> blabla description</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title> Types of products</Card.Title>
                                <Card.Text> blabla description</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                            <Card.Body>
                                <Card.Title> Types of products</Card.Title>
                                <Card.Text> blabla description</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }

}