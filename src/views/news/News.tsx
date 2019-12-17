import React from 'react';
import intl from "react-intl-universal";

const News: React.FC = () => {
    return (
        <div>
            <h1 id="pageHeader">{intl.get('NEWS_HEADER')}</h1>
            <p>{intl.get('NEWS_CONTENT')}</p>
        </div>
    );
};

export default News;