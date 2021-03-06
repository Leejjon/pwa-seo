import React from 'react';
import {useTranslation} from "react-i18next";
import PageHelmet from "../../components/page-helmet/PageHelmet";

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <PageHelmet pageTitle={t('ABOUT_HEADER')} pageDescription={t('ABOUT_CONTENT')} />
            <h1 id='pageHeader'>{t('ABOUT_HEADER')}</h1>
            <p>{t('ABOUT_CONTENT')}</p>
        </div>
    );
};

export default About;