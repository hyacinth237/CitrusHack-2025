import Image from "next/image";

const Supernatural = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-screen text-6xl text-black">Supernatural</div>
      <div className="w-screen text-4xl text-gray-700">Coloring Pages</div>
      <div className="grid grid-cols-2 gap-15">
        <a href="/supernatural/hocus-pocus.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Hocus Pocus"
            className="object-none"
            src="/supernatural/hocus-pocus.webp"
          />
          <button className="bg-amber-700 hover:bg-rose-300 text-4xl text-white py-2 px-4 rounded">
            Hocus Pocus
          </button>
        </a>
        <a href="/supernatural/hotel-transylvania.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Hotel Transylvania"
            className="object-none"
            src="/supernatural/hotel-transylvania.webp"
          />
          <button className="bg-amber-700 hover:bg-rose-300 text-4xl text-white py-2 px-4 rounded">
            Hotel Transylvania
          </button>
        </a>
        <a href="/supernatural/monster-high.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Monster High"
            className="object-none"
            src="/supernatural/monster-high.webp"
          />
          <button className="bg-amber-700 hover:bg-rose-300 text-4xl text-white py-2 px-4 rounded">
            Monster High
          </button>
        </a>
        <a href="/supernatural/monsters-inc.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Monsters Inc"
            className="object-none"
            src="/supernatural/monsters-inc.webp"
          />
          <button className="bg-amber-700 hover:bg-rose-300 text-4xl text-white py-2 px-4 rounded">
            Monsters Inc
          </button>
        </a>
      </div>
    </div>
  );
};

export default Supernatural;
