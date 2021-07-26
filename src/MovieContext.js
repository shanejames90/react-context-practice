import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'The Sound of Music',
            price: '$10',
            id: '1'
        },
        {
            name: 'Rocky',
            price: '$10',
            id: '2'
        },
        {
            name: 'Luca',
            price: '$21',
            id: '3'
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}