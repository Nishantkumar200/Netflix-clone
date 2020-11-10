import "./App.css";
import { request } from "./FetchApi";
import Row from "./Row";
import "./Row.css";
import Nav from './Nav'
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* Banner */}
      <Banner trendingNow={request.TrendingNow} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.NetflixOriginal}
        isLarge={true}
        className="row"
      />
      <Row title="Trending Now" fetchUrl={request.TrendingNow} />
      <Row title="Popular Movies" fetchUrl={request.PopularMovies} />
      <Row title="Upcoming Movies" fetchUrl={request.UpcomingMovies} />
      <Row title="Kids Movies" fetchUrl={request.KidsMovies} />
    </div>
  );
}

export default App;
