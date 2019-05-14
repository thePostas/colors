import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const colors = [
    {
        color: 'red',
        name: 'красный',
        active: false
    },
    {
        color: 'green',
        name: 'зеленый',
        active: false
    },
    {
        color: 'blue',
        name: 'синий',
        active: false
    }
];

    const app = document.getElementById('app');
    ReactDOM.render(<App colors={colors}/>, app);