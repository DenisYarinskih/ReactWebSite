import React from 'react';
import {Slider} from './components/Slider';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Jumbotron from './components/Jumbotron';
import styled from 'styled-components';

const Styles = styled.div`
    .some{
        width: 18rem;
        height: 35rem;
    }
    .imgClass{
        width: 18rem;
        height: 26rem;
    }
    .rowClass{
        // padding: auto 100px auto;
    }
`

export const Home = () => (
    <>
        <Slider/>
        <Styles>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem', paddingLeft: '4rem'}}>
            <Row className="rowClass">
                <Col>
                    <Card className="some">
                        <Card.Img className="imgClass" variant="top" src={require('./pictures/picture3.jpg')}/>
                        <Card.Body>
                            <Card.Title>Belarus Protest</Card.Title>
                            <Card.Text>    
                                Friedlicher Protest in Belarus gegen Staatschef Lukaschenko
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="some">
                        <Card.Img className="imgClass" variant="top" src={require('./pictures/picture9.jpg')}/>
                        <Card.Body>
                            <Card.Title>People</Card.Title>
                            <Card.Text>
                                Some street photos aus Deutschland
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="some">
                        <Card.Img className="imgClass" variant="top" src={require('./pictures/picture6.jpg')}/>
                        <Card.Body>
                            <Card.Title>Abstract Realism</Card.Title>
                            <Card.Text>
                                This is the infusion of the elements of design with the depiction of real life in visual art
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </Styles>       
        <Jumbotron/>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={require('./pictures/picture5.jpg')} height={600}/>
                </Col>
                <Col md={5}>
                    <h2>Moderne Kunst</h2>
                    <p>Ut aute eiusmod consectetur exercitation sit culpa ut aliqua dolor id ipsum. Labore id aute commodo et in aute. Laboris occaecat ipsum Lorem ex tempor voluptate.</p>
                </Col>
            </Row>
        </Container>
    </>
)