import React from 'react';
import {act, render, fireEvent, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

test('Renders without crashing', async() => {
    await act(async () => {
        render(<App/>);
    });
});

test('Verify home page header', async() => {
    let app: HTMLElement | undefined = undefined;
    await act(async () => {
        const {container} = render(<App/>);
        app = container;
    });
    let appAsHtmlElement = (app as unknown as HTMLElement);
    const pageHeaderContent = appAsHtmlElement.querySelector("#pageHeader")?.firstChild?.textContent;
    expect(pageHeaderContent).toMatch('Home page');
});

test('Navigate to news', async () => {
    let app: HTMLElement | undefined = undefined;
    await act(async () => {
        const {container} = render(<App/>);
        app = container;
    });

    let appAsHtmlElement = (app as unknown as HTMLElement);
    const linkToNewsElement: Element = (appAsHtmlElement.querySelector('#linkToNews') as Element);
    fireEvent.click(linkToNewsElement);
    const pageHeaderContent = await waitForElement(() => appAsHtmlElement.querySelector('#pageHeader')?.firstChild?.textContent);
    expect(pageHeaderContent).toMatch('News page');
});

test('Navigate to about', async () => {
    let app: HTMLElement | undefined = undefined;
    await act(async () => {
        const {container} = render(<App/>);
        app = container;
    });

    let appAsHtmlElement = (app as unknown as HTMLElement);
    const linkToAboutElement: Element = (appAsHtmlElement.querySelector('#linkToAbout') as Element);
    fireEvent.click(linkToAboutElement);
    const pageHeaderContent = await waitForElement(() => appAsHtmlElement.querySelector('#pageHeader')?.firstChild?.textContent);
    expect(pageHeaderContent).toMatch('About page');
});