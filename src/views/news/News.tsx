import React from 'react';
import {useTranslation} from "react-i18next";
import PageHelmet from "../../components/page-helmet/PageHelmet";

const News: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <PageHelmet pageTitle={t('NEWS_HEADER')} pageDescription={t('NEWS_CONTENT')} />
            <h1 id="pageHeader">{t('NEWS_HEADER')}</h1>
            <p>{t('NEWS_CONTENT')}</p>
        </div>
    );
};

export default News;