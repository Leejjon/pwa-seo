import React, {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import intl from 'react-intl-universal';
import Home from './views/home/Home';
import News from './views/news/News';
import About from './views/about/About';

const locales = {
    "en-US": require('./locales/en-US.json'),
    "nl-NL": require('./locales/nl-NL.json'),
};

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function initMessages() {
            await intl.init({
                currentLocale: "en-US",
                locales
            });
        }

        initMessages().then(() => setLoading(false));
    }, [loading]);

    if (loading) {
        return (<div className="App">Loading ...</div>);
    } else {
        return (
            <div className="App">
                <BrowserRouter>
                    <Link id="linkToHome" to="/">
                        {intl.get('HOME_LINK')}
                    </Link><br/>
                    <Link id="linkToNews" to="/news">
                        {intl.get('NEWS_LINK')}
                    </Link><br/>
                    <Link id="linkToAbout" to="/about">
                        {intl.get('ABOUT_LINK')}
                    </Link>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/about" component={About}/>
                </BrowserRouter>
            </div>
        );
    }
};

export default App;
