import React from 'react'
import Board from '../components/Board';
import Card from '../components/Card';
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
            <main className="flexbox">
            <Board id="board-1" className="board">
                <Card id="card-1" draggable="true">
                test2
                </Card>
            </Board>

            <Board id="board-2" className="board">
                <Card id="card-2" draggable="true">
                test3
                </Card>
            </Board>
            </main>
        </div>
    )
}

export default Home
