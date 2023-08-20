import Navigation from '../../Navigation-Menu/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import image1 from './Images/samsung galaxy S23 ultra 5G - green.jpg';
import image2 from './Images/samsung galaxy S22 ultra - dark red.jpg'
import image3 from './Images/samsung galaxy S22 ultra - green.jpg'
import image4 from './Images/samsung galaxy S21 FE 5G - lavender.jpg'
import image5 from './Images/samsung galaxy Z fold4 5G - phantom black.jpg';
import image6 from './Images/samsung galaxy A14 - black.jpg'
import image7 from './Images/samsung galaxy S21 FE 5G - lavender.jpg' 
import image8 from './Images/samsung galaxy M04 - sea glass green.jpg'

function Mobile() {
  return (
  <>
    <Navigation />
    <Container fluid="lg" className='text-center me-auto'>
        <Row className='p-3'>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image1} height='200'/>
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy S23 Ultra 5G - Green</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image2} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy S22 Ultra - Dark Red</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image3} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy S22 Ultra - Green</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image4} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy S21 FE 5G - Lavender</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image5} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy Z Fold4 5G - Black</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image6} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy A14 - Black</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image7} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy S21 FE 5G - Lavender</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{paddingBottom:'10px'}}>
                <Card className='card-item'>
                    <Card.Img variant="top" src={image8} height='200' />
                    <Card.Body style={{padding:'0'}}>
                        <Card.Title>Samsung Galaxy M04 - Sea Glass Green</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  </>
  );
}

export default Mobile;