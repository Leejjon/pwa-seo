import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './views/home/Home';
import News from './views/news/News';
import About from './views/about/About';

const App: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="App">
            <BrowserRouter>
                <Link id="linkToHome" to="/">
                    {t('HOME_LINK')}
                </Link><br/>
                <Link id="linkToNews" to="/news">
                    {t('NEWS_LINK')}
                </Link><br/>
                <Link id="linkToAbout" to="/about">
                    {t('ABOUT_LINK')}
                </Link>

                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/about" component={About}/>
            </BrowserRouter>
        </div>
    );
};

export default App;
