import MyComponent from './my_component';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const component = ReactDOMServer.renderToString(<MyComponent />);

console.log(component);