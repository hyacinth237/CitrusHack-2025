import Image from "next/image";

const MovieGenre = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center">
      <div className="grid grid-cols-2 gap-20">
        <Image
          width={430}
          height={350}
          alt="Princess"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/princess.jpg"
        />
        <div className="">
          Princess
        </div>
        <Image
          width={430}
          height={350}
          alt="Fairytale"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/fairytale.jpg"
        />
        <Image
          width={430}
          height={350}
          alt="Fantasy"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/fantasy.jpg"
        />
        <Image
          width={430}
          height={350}
          alt="Supernatural"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/supernatural.jpg"
        />
        <Image
          width={430}
          height={350}
          alt="Adventure"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/adventure.jpg"
        />
        <Image
          width={430}
          height={350}
          alt="Video Games"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/video-games.jpg"
        />
      </div>
      <Image
        width={430}
        height={350}
        alt="Sports"
        className="rounded-lg drop-shadow-lg border-2 border-white"
        src="/imageheaders/sports.jpg"
      />
    </div>
  );
};

export default MovieGenre;
