import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <Card>
        <Card.Body>
          <Card.Title className="border-bottom pb-3">Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="secondary" type="submit">
                Login
              </Button>
              <div className="w-100 d-flex justify-content-center">
                <a href="/Register" className="text-dark">
                  Don't have an account? Register here!
                </a>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
