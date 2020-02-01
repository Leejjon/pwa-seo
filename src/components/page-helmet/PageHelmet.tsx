import React from "react";
import {Helmet} from "react-helmet";

type PageHelmetProps = {
    pageTitle: string,
    pageDescription: string
}

const PageHelmet: React.FC<PageHelmetProps> = ({pageTitle, pageDescription}) => {
    const locale = window.location.hostname === "127.0.0.1" ? 'en' : 'nl';
    const hostname = window.location.hostname === "127.0.0.1" ? 'http://localhost' : 'http://127.0.0.1';
    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} data-testid="metaDescription"/>
            <link rel="alternate" href={hostname + document.location.pathname} hrefLang={locale} data-testid={"alternateLink" + locale.toUpperCase()} />
        </Helmet>
    );
};

export default PageHelmet;