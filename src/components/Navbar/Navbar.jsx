import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth/action-creators";

export default function Menu({ user }) {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <div className="mainMenu">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Exams Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navigation">
              <Nav.Link href="/">Home</Nav.Link>
              {/* {!user.isAuth && ( */}
              <>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
              </>
              {/* // )} */}
              <NavDropdown title="Exams" id="basic-nav-dropdown">
                {/* {user.role === 0 && ( */}
                <>
                  <NavDropdown.Item href="/Exams">My Exams</NavDropdown.Item>
                </>
                {/* // )} */}

                {/* {user.role === 1 && ( */}
                <>
                  <NavDropdown.Item href="/CreateExam">
                    Create Exam
                  </NavDropdown.Item>
                </>
                {/* )} */}
              </NavDropdown>
              {user.isAuth && (
                <Nav.Link onClick={() => signOut()} className="logout">
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
