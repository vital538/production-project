import React, { Suspense, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Counter } from './components/Counter';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export enum Theme {
    LIDHT = "light",
    DARK = "dark",
}

const App = () => {
    const [theme, settTheme] = useState(Theme.LIDHT);

    const toggleTheme = () => {
        settTheme(theme === Theme.DARK ? Theme.LIDHT : Theme.DARK);
    }
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;