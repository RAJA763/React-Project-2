import Navigation from '../../Navigation-Menu/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import image1 from './Images/Galaxy Book3 Ultra.jpg';
import image2 from './Images/Galaxy Book3 Pro.png'
import image3 from './Images/Galaxy Book3 360.png'
import image4 from './Images/Galaxy Book2 Pro.jpg'
import image5 from './Images/Galaxy Book2 360.jpg';
import image6 from './Images/Galaxy Book2.jpg'

function Laptop() {
  return (
  <>
    <Navigation />
    <Container fluid="lg" className='text-center me-auto'>
        <Row className='p-3'>
            <Col style={{paddingBottom:'15px'}}>
                <Card className='card-item' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={image1} height='200'/>
                    <Card.Body>
                        <Card.Title>Galaxy Book3 Ultra</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={image5} height='200' />
                    <Card.Body>
                        <Card.Title>Galaxy Book2 360</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={image6} height='200' />
                    <Card.Body>
                        <Card.Title>Galaxy Book2</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={image2} height='200' />
                    <Card.Body>
                        <Card.Title>Galaxy book3 Pro</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={image3} height='200' />
                    <Card.Body>
                        <Card.Title>Galaxy book3 360</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={image4} height='200' />
                    <Card.Body>
                        <Card.Title>Galaxy Book2 Pro 360</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
    </Container>
  </>
  );
}

export default Laptop;