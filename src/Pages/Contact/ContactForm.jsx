import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  return (
    <Form style={{paddingTop:'10px'}}>
      <Form.Group className="mb-3 w-25 p-50" controlId="formBasicName">
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="formBasicNumber">
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;