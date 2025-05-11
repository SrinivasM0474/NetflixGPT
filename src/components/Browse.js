import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSeach from "./GptSeach";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const { showGptSearch } = useSelector((state) => state.gpt);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSeach />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/**
       * Main Container
       *  Video background
       *  VideoTitle
       * SecondaryCOntainer
       *  MovieList * n
       *  cards * n
       *
       */}
    </div>
  );
};

export default Browse;
