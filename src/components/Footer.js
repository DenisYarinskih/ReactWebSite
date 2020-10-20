import React from 'react';
import {Container} from 'react-bootstrap';

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: '#fff',bottom: '0px' }}>
        <Container style={{display:'flex',justifyContent: 'center' ,padding: '10px'}}>
            <p>@Bernadski_ua</p>
        </Container>
    </Container>
)

export default Footer;