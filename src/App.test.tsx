import React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import './locales/i18n';

test('Renders without crashing', async() => {
    render(<App/>);
});

test('Verify home page header', async() => {
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