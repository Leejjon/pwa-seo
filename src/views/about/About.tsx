import React from 'react';
import intl from 'react-intl-universal';

const About: React.FC = () => {
    return (
        <div>
            <h1 id='pageHeader'>{intl.get('ABOUT_HEADER')}</h1>
            <p>{intl.get('ABOUT_CONTENT')}</p>
        </div>
    );
};

export default About;