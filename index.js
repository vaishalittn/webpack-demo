import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './src/app';

const elem = document.getElementById('app');

render(
    <App />,
    elem
);