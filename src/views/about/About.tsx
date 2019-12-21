import React from 'react';
import {useTranslation} from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id='pageHeader'>{t('ABOUT_HEADER')}</h1>
            <p>{t('ABOUT_CONTENT')}</p>
        </div>
    );
};

export default About;