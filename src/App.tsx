import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const movies: string[] = [
    'Boondock Saints',
    'Good Will Hunting',
    'Manchester by the sea',
    'The Departed',
    'The Town',
    'Rounders'
]


interface buttonProps {
    handleClick(): void;
}
const Button: React.FC<buttonProps> = ({ ...props }) => {
    return <button style={{ width: '200px', fontSize: '18px'}} onClick={props.handleClick}>
        What movie is Mike going to watch?
    </button>
}

const App: React.FC = () => {
    const [movie, setMovie] = useState('');

    const getRandomMovie = (): void => { 
        const newMovie = movies[Math.floor(Math.random() * movies.length)];
        
        newMovie === movie
            ? getRandomMovie()
            : setMovie(newMovie);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Button handleClick={getRandomMovie}/>
                <p>
                    {movie}
                </p>
            </header>
        </div>
    );
}

export default App;
