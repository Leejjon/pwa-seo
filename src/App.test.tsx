import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('Verify page header', () => {
    const {container} = render(<App/>);
    const pageHeaderContent = container.querySelector("#pageHeader")
        ?.firstChild
        ?.textContent;
    expect(pageHeaderContent).toMatch('Home page');
});