import Header from "../components/home/header";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Header />
      <div className="flex font-nunito text-blue-600 text-6xl text-green">
        Color for Kids
      </div>
    </div>
  );
};

export default Home;
