import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import picture from '../pictures/picture4.jpg';
import {Button, Row, Col,Card} from 'react-bootstrap';

const Styles = styled.div `
    .jumbo {
        background: url(${picture}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 800px;
        position: relative;
        z-index: -2;
    }
    // .overlay {
    //     background-color: #000;
    //     opacity: 0.9;
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     right: 0;
    //     z-index: -1;
    // }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
        {/* <div className="overlay"></div> */}
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row style={{width: '320px',textAlign: 'left',paddingTop: '80px',paddingLeft:"15px"}}>
                <Col>
                    <Card>
                        <h2>Streetphotography: some tips to be not "alone in a crowd"</h2>
                        
                    </Card>   
                    <Button variante="primary" className="mr-2" color="#adb1b8">Learn more</Button>                 
                </Col>
            </Row>
            
        </Container>
        </Jumbo>
    </Styles>
    
)

export default Jumbotron;