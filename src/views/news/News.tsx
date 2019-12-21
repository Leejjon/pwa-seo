import React from 'react';
import {useTranslation} from "react-i18next";

const News: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 id="pageHeader">{t('NEWS_HEADER')}</h1>
            <p>{t('NEWS_CONTENT')}</p>
        </div>
    );
};

export default News;