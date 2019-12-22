import React from 'react';
import {render, fireEvent, waitForElement, waitForDomChange} from '@testing-library/react';
import App from './App';
import './locales/i18n';

test('Renders without crashing', () => {
    render(<App/>);
});

test('Verify home page content', async () => {
    const {container} = render(<App/>);
    const pageHeaderContent = container.querySelector('#pageHeader')?.firstChild?.textContent;
    expect(pageHeaderContent).toMatch('Home page');

    await waitForDomChange();
    expect(document.title).toMatch('Home page');
});

test('Navigate to news', async () => {
    const {container} = render(<App/>);
    const linkToNewsElement: Element = (container.querySelector('#linkToNews') as Element);
    fireEvent.click(linkToNewsElement);
    const pageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
    expect(pageHeaderContent).toMatch('News page');

    await waitForDomChange();
    expect(document.title).toMatch('News page');
});

test('Navigate to about', async () => {
    const {container} = render(<App/>);
    const linkToAboutElement: Element = (container.querySelector('#linkToAbout') as Element);
    fireEvent.click(linkToAboutElement);
    const pageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
    expect(pageHeaderContent).toMatch('About page');

    await waitForDomChange();
    expect(document.title).toMatch('About page');
});