import React from 'react';

import { Container } from './styles';

export default function Card() {
    return (
        <Container>
            <header>
                <Label color="#7159c1"/>
            </header>
            <p> Fazer Migração completa de servidor </p>
            <img src="https://api.adorable.io/avatars/285/OMG.png" alt="" /> 
        </Container>
    );
}