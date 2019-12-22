import React from "react";
import { Helmet } from "react-helmet";

type PageHelmetProps = {
    pageTitle: string,
    pageDescription: string
}

const PageHelmet: React.FC<PageHelmetProps> = ({ pageTitle, pageDescription}) => {
    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} data-test-id="metaDescription" />
        </Helmet>
    );
};

export default PageHelmet;