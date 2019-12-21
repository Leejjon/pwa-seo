import React from 'react';
import {useTranslation} from "react-i18next";

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id="pageHeader">{t('HOME_HEADER')}</h1>
            <p>{t('HOME_CONTENT')}</p>
        </div>
    );
};

export default Home;