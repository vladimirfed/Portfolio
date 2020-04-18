import React , { Component} from 'react'
import { Tab, Nav, Row, Col, Container } from 'react-bootstrap'

export default class About extends Component{
    render(){
        return(
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Design22
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Design333
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        Design4444
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        Design55555
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first">
                                    <img src="https://i.stack.imgur.com/p9mUO.jpg"></img>
                                    <p> HELLO KIGVB ditugbh jfvd dlhj jk hiudhfviuh oiuv heiourh iu iurnie iu</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://i.stack.imgur.com/p9mUO.jpg" ></img>
                                    <p> HELLO KIGVB ditugbh jfvd dlhj jk hiudhfviuh oiuv heiourh iu iurnie iu</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }

}