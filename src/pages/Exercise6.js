import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Exercise6() {
  return (
    <>
    <div className="text-center">
    <h1 className="mt-5">This is Exercise 6</h1>
    </div>
    <Form>
      <Form.Group className="mb-3" controlId="FirstaName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="fLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter Last Name" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick="{Button}">
        Greet Me!
      </Button>
    </Form>
    </>
  );
}

export default Exercise6;



