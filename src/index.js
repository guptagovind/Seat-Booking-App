import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import './styles/styles.scss';

const root = (
    <App />
);

ReactDom.render(root, document.getElementById('app'));
