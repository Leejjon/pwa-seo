import React from 'react';
import {useTranslation} from "react-i18next";
import PageHelmet from "../../components/page-helmet/PageHelmet";

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <PageHelmet pageTitle={t('HOME_HEADER')} pageDescription={t('HOME_CONTENT')} />
            <h1 id="pageHeader">{t('HOME_HEADER')}</h1>
            <p>{t('HOME_CONTENT')}</p>
        </div>
    );
};

export default Home;