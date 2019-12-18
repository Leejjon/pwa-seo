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
    let app: HTMLElement;
    await act(async () => {
        const {container} = render(<App/>);
        app = container;
    });
    // @ts-ignore
    if (app) {
        const pageHeaderContent = app.querySelector("#pageHeader")?.firstChild?.textContent;
        expect(pageHeaderContent).toMatch('Home page');
    } else {
        fail("The app should have been initialized.");
    }
});

test('Navigate to news', async () => {
    let app: HTMLElement;
    await act(async () => {
        const {container} = render(<App/>);
        app = container;
        const linkToNewsElement: Element = (app.querySelector('#linkToNews') as Element);
        fireEvent.click(linkToNewsElement);
        const pageHeaderContent = await waitForElement(() => app.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(pageHeaderContent).toMatch('News page');
    });

    // @ts-ignore
    if (app) {
        const linkToNewsElement: Element = (app.querySelector('#linkToNews') as Element);
        fireEvent.click(linkToNewsElement);
        const pageHeaderContent = await waitForElement(() => app.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(pageHeaderContent).toMatch('News page');
    } else {
        fail("The app should have been initialized.");
    }
});

test('Navigate to about', async () => {
    let app: HTMLElement;
    await act(async () => {
        const {container} = render(<App/>);
        app = container;
    });

    // @ts-ignore
    if (app) {
        const linkToAboutElement: Element = (app.querySelector('#linkToAbout') as Element);
        fireEvent.click(linkToAboutElement);
        const pageHeaderContent = await waitForElement(() => app.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(pageHeaderContent).toMatch('About page');
    } else {
        fail("The app should have been initialized.");
    }
});