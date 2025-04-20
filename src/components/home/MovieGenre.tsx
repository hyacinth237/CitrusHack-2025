import Image from "next/image";

const MovieGenre = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col items-center gap-5">
          <Image
            width={430}
            height={350}
            alt="Princess"
            className="rounded-lg drop-shadow-lg border-2 border-white"
            src="/imageheaders/princess.jpg"
          />
          <div className="flex font-caveat text-5xl text-white">Princess</div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            width={430}
            height={350}
            alt="Fairytale"
            className="rounded-lg drop-shadow-lg border-2 border-white"
            src="/imageheaders/fairytale.jpg"
          />
          <div className="flex font-caveat text-5xl text-white">Fairytale</div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            width={430}
            height={350}
            alt="Fantasy"
            className="rounded-lg drop-shadow-lg border-2 border-white"
            src="/imageheaders/fantasy.jpg"
          />
          <div className="flex font-caveat text-5xl text-white">Fantasy</div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            width={430}
            height={350}
            alt="Supernatural"
            className="rounded-lg drop-shadow-lg border-2 border-white"
            src="/imageheaders/supernatural.jpg"
          />
          <div className="flex font-caveat text-5xl text-white">
            Supernatural
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            width={430}
            height={350}
            alt="Adventure"
            className="rounded-lg drop-shadow-lg border-2 border-white"
            src="/imageheaders/adventure.jpg"
          />
          <div className="flex font-caveat text-5xl text-white">Adventure</div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            width={430}
            height={350}
            alt="Video Games"
            className="rounded-lg drop-shadow-lg border-2 border-white"
            src="/imageheaders/video-games.jpg"
          />
          <div className="flex font-caveat text-5xl text-white">
            Video Games
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Image
          width={430}
          height={350}
          alt="Sports"
          className="rounded-lg drop-shadow-lg border-2 border-white"
          src="/imageheaders/sports.jpg"
        />
        <div className="flex font-caveat text-5xl text-white">Sports</div>
      </div>
    </div>
  );
};

export default MovieGenre;
