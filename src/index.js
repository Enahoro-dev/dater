import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)