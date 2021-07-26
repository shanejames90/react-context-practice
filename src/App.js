import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
    <div className="bg-gray-background">
      <Nav />
      <AddMovie />
      <MovieList />
    </div>
    </MovieProvider>
  );
}

export default App;
