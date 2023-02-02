import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ width: "300px" }}>
      <h1 className="mb-3 text-light">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
          <Form.Check
            className="text-light"
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="mt-3 d-flex justify-content-between">
          <span>
            <Link className="text-light" to="/forgot-password">
              Forgot password?
            </Link>
          </span>
          <span>
            <Link className="text-light" to="/register">
              Register
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
}

export default Login;
