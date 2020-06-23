import React from 'react';
import { loadLists } from '../../services/api.js';

import List from '../List';

import { Container } from './styles';

const lists = loadlists();

export default function Board() {
    return (
        <Container>
            {lists.map(list => <List key={list.title}  data={list} />)}

        </Container>
    );
}