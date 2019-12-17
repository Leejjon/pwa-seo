import React from 'react';
import intl from 'react-intl-universal';

const Home: React.FC = () => {
    return (
        <div>
            <h1 id="pageHeader">{intl.get('HOME_HEADER')}</h1>
            <p>{intl.get('HOME_CONTENT')}</p>
        </div>
    );
};

export default Home;