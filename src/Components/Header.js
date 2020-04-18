import React, { Component } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Form,
  Button
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Other from '../Pages/Other'

export default class Header extends Component {
  render() {
    return (
        <>
      <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            /> Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/other">Other</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="texr"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/other" component={Other} />
          </Switch>
      </Router>
      </>
    );
  }
}
