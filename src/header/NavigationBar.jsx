import React from "react";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

function NavigationBar() {
  return (
      <div className="NavigationBar">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Calender">Calender</Nav.Link>
            <Nav.Link href="#Memo">Memo</Nav.Link>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="검색어를 입력하세요"
                    className="me-2"
                    aria-label="검색"
                  />
          <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;