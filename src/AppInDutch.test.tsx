import i18next from "i18next";
import {render, waitForDomChange} from "@testing-library/react";
import App from "./App";
import React from "react";
import './locales/i18n';

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
