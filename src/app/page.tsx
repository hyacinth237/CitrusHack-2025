import Header from "../components/home/header";
import MovieGenre from "../components/home/MovieGenre";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex font-nunito text-blue-600 text-6xl text-green">
        Color for Kids
      </div>
      <MovieGenre />
    </div>
  );
};

export default Home;
