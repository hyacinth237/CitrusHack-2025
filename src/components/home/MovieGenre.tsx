import Image from "next/image";

const MovieGenre = () => {
  return (
    <div className="flex columns-2 justify-center">
      <Image alt="Princess" className="object-none" src="/princess.jpg" />
      <Image alt="Fairytale" className="object-none" src="/fairytale.jpg" />
      <Image alt="Fantasy" className="object-none" src="/fantasy.jpg" />
      <Image
        alt="Supernatural"
        className="object-none"
        src="/supernatural.jpg"
      />
      <Image alt="Adventure" className="object-none" src="/adventure.jpg" />
      <Image alt="Video Games" className="object-none" src="/video-games.jpg" />
      <Image alt="Sports" className="object-none" src="/sports.jpg" />
    </div>
  );
};

export default MovieGenre;
