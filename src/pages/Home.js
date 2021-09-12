import React from 'react'
import Board from '../components/Board';
import Card from '../components/Card';
import HomePageCenter from '../components/HomePageCenter';
import HomePageIntro from '../components/HomePageIntro';
import NavbarOne from '../components/NavbarOne';
import NavbarSecond from '../components/NavbarSecond';
import NavbarThird from '../components/NavbarThird';
import '../main.css'

function Home() {
    return (
        <div>
            <NavbarOne />
            <NavbarSecond />
            <NavbarThird />
            <HomePageCenter />
            <HomePageIntro />
            
        </div>
    )
}

export default Home
