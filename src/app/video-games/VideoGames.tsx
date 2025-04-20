import Image from "next/image";

const VideoGames = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-screen text-6xl text-black">Video Games</div>
      <div className="w-screen text-4xl text-gray-700">Coloring Pages</div>
      <div className="grid grid-cols-2 gap-15">
        <a href="/video-games/five-nights-at-freddys.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Five Nights at Freddy's"
            className="object-none"
            src="/video-games/five-nights-at-freddys.webp"
          />
          <button className="bg-purple-800 hover:bg-blue-900 text-4xl text-white py-2 px-4 rounded">
            Five Nights at Freddy's
          </button>
        </a>
        <a href="/video-games/mario-kart.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Mario Kart"
            className="object-none"
            src="/video-games/mario-kart.webp"
          />
          <button className="bg-purple-800 hover:bg-blue-900 text-4xl text-white py-2 px-4 rounded">
            Mario Kart
          </button>
        </a>
        <a href="/video-games/minecraft.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Minecraft"
            className="object-none"
            src="/video-games/minecraft.webp"
          />
          <button className="bg-purple-800 hover:bg-blue-900 text-4xl text-white py-2 px-4 rounded">
            Minecraft
          </button>
        </a>
        <a href="/video-games/pokemon.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Pokemon"
            className="object-none"
            src="/video-games/pokemon.webp"
          />
          <button className="bg-purple-800 hover:bg-blue-900 text-4xl text-white py-2 px-4 rounded">
            Pokemon
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <a href="/video-games/sonic.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Sonic"
            className="object-none"
            src="/video-games/sonic.webp"
          />
          <button className="bg-purple-800 hover:bg-blue-900 text-4xl text-white py-2 px-4 rounded">
            Sonic
          </button>
        </a>
      </div>
    </div>
  );
};

export default VideoGames;
