import React from 'react';
import {render, fireEvent, waitForElement, waitForDomChange, within} from '@testing-library/react';
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

        const descriptionMetaTag = within(document.head).getByTestId('metaDescription') as any as HTMLMetaElement;
        expect(descriptionMetaTag.content).toMatch('This is the home page');

        const alternateLinkNL = within(document.head).getByTestId('alternateLinkNL') as any as HTMLLinkElement;
        expect(alternateLinkNL.rel).toMatch('alternate');
        expect(alternateLinkNL.hreflang).toMatch('nl');
        expect(alternateLinkNL.href).toMatch('http://127.0.0.1/');
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

        const descriptionMetaTag = within(document.head).getByTestId('metaDescription') as any as HTMLMetaElement;
        expect(descriptionMetaTag.content).toMatch('This is the news page');

        const alternateLinkNL = within(document.head).getByTestId('alternateLinkNL') as any as HTMLLinkElement;
        expect(alternateLinkNL.rel).toMatch('alternate');
        expect(alternateLinkNL.hreflang).toMatch('nl');
        expect(alternateLinkNL.href).toMatch('http://127.0.0.1/news');
    });

    test('Navigate to about', async () => {
        const {container, getByTestId} = render(<App/>);
        const pageHeaderContent = container.querySelector('#pageHeader')?.firstChild?.textContent;
        expect(pageHeaderContent).toMatch('Home page');

        const linkToAboutElement: Element = (container.querySelector('#linkToAbout') as Element);
        fireEvent.click(linkToAboutElement);
        const changedPageHeaderContent = await waitForElement(() => container.querySelector('#pageHeader')?.firstChild?.textContent);
        expect(changedPageHeaderContent).toMatch('About page');

        await waitForDomChange();
        expect(document.title).toMatch('About page');

        const descriptionMetaTag = within(document.head).getByTestId('metaDescription') as any as HTMLMetaElement;
        expect(descriptionMetaTag.content).toMatch('This is the about page');

        const alternateLinkNL = within(document.head).getByTestId('alternateLinkNL') as any as HTMLLinkElement;
        expect(alternateLinkNL.rel).toMatch('alternate');
        expect(alternateLinkNL.hreflang).toMatch('nl');
        expect(alternateLinkNL.href).toMatch('http://127.0.0.1/about');
    });
});

describe('Test Dutch pages', () => {
    beforeEach(() => {
        delete window.location;
        //@ts-ignore
        window.location = new URL('http://127.0.0.1');
    });

    beforeEach(() => {
        i18next.changeLanguage('nl');
    });

    test('Verify home page content', async () => {
        const {container} = render(<App/>);
        const pageHeaderContent = container.querySelector('#pageHeader')?.firstChild?.textContent;
        expect(pageHeaderContent).toMatch('Thuis pagina');

        await waitForDomChange();
        expect(document.title).toMatch('Thuis pagina');

        const descriptionMetaTag = within(document.head).getByTestId('metaDescription') as any as HTMLMetaElement;
        expect(descriptionMetaTag.content).toMatch('Dit is de thuis pagina');

        const alternateLinkEN = within(document.head).getByTestId('alternateLinkEN') as any as HTMLLinkElement;
        expect(alternateLinkEN.rel).toMatch('alternate');
        expect(alternateLinkEN.hreflang).toMatch('en');
        expect(alternateLinkEN.href).toMatch('http://localhost/');
    });
});
