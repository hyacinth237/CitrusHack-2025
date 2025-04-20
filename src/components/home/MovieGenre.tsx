import Image from "next/image";
import Link from "next/link";

const MovieGenre = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center">
      <div className="grid grid-cols-2 gap-20">
        <Link href="/princess" target="_blank">
          <Image
            width={430}
            height={350}
            alt="Princess"
            className="object-none"
            src="/imageheaders/princess.jpg"
          />
        </Link>
        <Link href="/fairytale" target="_blank">
          <Image
            width={430}
            height={350}
            alt="Fairytale"
            className="object-none"
            src="/imageheaders/fairytale.jpg"
          />
        </Link>
        <Link href="/fantasy" target="_blank">
          <Image
            width={430}
            height={350}
            alt="Fantasy"
            className="object-none"
            src="/imageheaders/fantasy.jpg"
          />
        </Link>
        <Link href="/supernatural" target="_blank">
          <Image
            width={430}
            height={350}
            alt="Supernatural"
            className="object-none"
            src="/imageheaders/supernatural.jpg"
          />
        </Link>
        <Link href="/adventure" target="_blank">
          <Image
            width={430}
            height={350}
            alt="Adventure"
            className="object-none"
            src="/imageheaders/adventure.jpg"
          />
        </Link>
        <Image
          width={430}
          height={350}
          alt="Video Games"
          className="object-none"
          src="/imageheaders/video-games.jpg"
        />
      </div>
      <Image
        width={430}
        height={350}
        alt="Sports"
        className="object-none"
        src="/imageheaders/sports.jpg"
      />
    </div>
  );
};

export default MovieGenre;
