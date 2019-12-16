import React from 'react';
import intl from 'react-intl-universal';

type AppProps = { message: string }; /* could also use interface */

export interface StandardComponentProps {
    title: string
}

export function StandardComponent(props: StandardComponentProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}

export interface HomePageProps {
    getMessage(message: string): string;
}

const Home: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div>
            <h1 id="pageHeader">Home page</h1>
            <p>This is the home page</p>
            {props.getMessage('HOME_CONTENT')}
            <br />
            {intl.get('HOME_CONTENT')}
        </div>
    );
};

export default Home;