import Header from "./components/Header";
import Movie from "./components/Movie";
import "./App.css";
import movies from "./movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((element) => {
          return (
            <Movie
              Title={element.Title}
              Year={element.Year}
              Runtime={element.Runtime}
              Poster={element.Poster}
              Link={element.Link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

