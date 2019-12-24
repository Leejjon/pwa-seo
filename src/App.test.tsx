import React from 'react';
import {render, fireEvent, waitForElement, waitForDomChange} from '@testing-library/react';
import App from './App';
import './locales/i18n';
import i18next from "i18next";

describe('Test english pages', () => {
    beforeEach(() => {
        delete window.location;
        //@ts-ignore
        window.location = new URL('https://localhost');
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
        const pageHeaderContent = container.querySelector('#pageHeader')?.firstChild?.textContent;
        expect(pageHeaderContent).toMatch('Home page');
        const linkToNewsElement: Element = (container.querySelector('#linkToNews') as Element);
        fireEvent.click(linkToNewsElement);
        const changedPageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(changedPageHeaderContent).toMatch('News page');

        await waitForDomChange();
        expect(document.title).toMatch('News page');
    });

    test('Navigate to about', async () => {
        const {container} = render(<App/>);
        const pageHeaderContent = container.querySelector('#pageHeader')?.firstChild?.textContent;
        expect(pageHeaderContent).toMatch('Home page');

        const linkToAboutElement: Element = (container.querySelector('#linkToAbout') as Element);
        fireEvent.click(linkToAboutElement);
        const changedPageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(changedPageHeaderContent).toMatch('About page');

        await waitForDomChange();
        expect(document.title).toMatch('About page');
    });
});

describe('Test Dutch pages', () => {
    beforeAll(() => {
        i18next.changeLanguage('nl');
    });

    test('Verify home page content', async () => {
        const {container} = render(<App/>);
        const pageHeaderContent = container.querySelector('#pageHeader')?.firstChild?.textContent;
        expect(pageHeaderContent).toMatch('Thuis pagina');

        await waitForDomChange();
        expect(document.title).toMatch('Thuis pagina');
    });
});
