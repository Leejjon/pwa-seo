import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('Verify page header', () => {
    const {container} = render(<App/>);
    const pageHeaderContent = container.querySelector("#pageHeader")?.firstChild?.textContent;
    expect(pageHeaderContent).toMatch('Home page');
});

test('Navigate to news', async () => {
    const {container} = render(<App/>);
    const linkToNewsElement: Element = (container.querySelector('#linkToNews') as Element);
    fireEvent.click(linkToNewsElement);
    const pageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
    expect(pageHeaderContent).toMatch('News page');
});

test('Navigate to about', async () => {
    const {container} = render(<App/>);
    const linkToAboutElement: Element = (container.querySelector('#linkToAbout') as Element);
    fireEvent.click(linkToAboutElement);
    const pageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
    expect(pageHeaderContent).toMatch('About page');
});