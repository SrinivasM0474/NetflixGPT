import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-4 bg-black">
      <h1 className="font-bold text-[32px] p-4 text-white">{title}</h1>
      <div className="flex overflow-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
