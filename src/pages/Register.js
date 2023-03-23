import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";

export default function Register() {
  return (
    <div className="register d-flex justify-content-center align-items-center">
      <Card>
        <Card.Body>
          <Card.Title className="border-bottom pb-3">Register</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confrim Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="secondary" type="submit">
                Login
              </Button>
              <div className="w-100 d-flex justify-content-center">
                <Link href="/Login" className="text-dark">
                  Have an account? Login here!
                </Link>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
