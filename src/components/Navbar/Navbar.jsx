import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Menu() {
  return (
    <div className="mainMenu">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Exams Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
              <NavDropdown title="Exams" id="basic-nav-dropdown">
                <NavDropdown.Item href="#my-exams">My Exams</NavDropdown.Item>
                <NavDropdown.Item href="#passed-exams">
                  Passed Exams
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#create-exam">
                  Create Exam
                </NavDropdown.Item>
                <NavDropdown.Item href="#create-exam">
                  Evaluate Exam
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
