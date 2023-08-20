import Navigation from '../../Navigation-Menu/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import image1 from './Images/Galaxy Tab S8.png';
import image2 from './Images/Galaxy Tab S.jpg'

function Tab() {
    return (
    <>
      <Navigation />
      <Container fluid="lg" className='text-center me-auto'>
          <Row className='p-3' style={{width:'532px'}}>
              <Col style={{paddingBottom:'10px'}}>
                  <Card className='card-item'>
                      <Card.Img variant="top" src={image1} height='200'/>
                      <Card.Body>
                          <Card.Title>Galaxy Tab S8</Card.Title>
                      </Card.Body>
                  </Card>
              </Col>
              <Col style={{paddingBottom:'10px'}}>
                  <Card className='card-item'>
                      <Card.Img variant="top" src={image2} height='200' />
                      <Card.Body>
                          <Card.Title>Galaxy Tab S</Card.Title>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
    </>
    );
  }
  
  export default Tab;