import Image from "next/image";

const Sports = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-screen text-8xl text-black font-caveat">Sports</div>
      <div className="w-screen text-5xl text-gray-700 font-caveat pb-10">Coloring Pages</div>
      <div className="grid grid-cols-2 gap-15">
        <a href="/sports/space-jam.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Space Jam"
            className="object-none"
            src="/sports/space-jam.webp"
          />
          <button className="bg-rose-950 hover:bg-amber-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            Space Jam
          </button>
        </a>
        <a href="/sports/the-karate-kid.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="The Karate Kid"
            className="object-none"
            src="/sports/the-karate-kid.webp"
          />
          <button className="bg-rose-950 hover:bg-amber-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            The Karate Kid
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center text-center pt-16">
        <a href="/sports/the-sandlot.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="The Sandlot"
            className="object-none"
            src="/sports/the-sandlot.webp"
          />
          <button className="bg-rose-950 hover:bg-amber-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            The Sandlot
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sports;
