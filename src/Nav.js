import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <header className="bg-gray-background">
            <h3>Shane's Cinema</h3>
            <p>List of Movies: {movies.length}</p>
        </header>
    );
}