import Image from "next/image";

const Fairytale = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-screen text-8xl text-black font-caveat">Fairytale</div>
      <div className="w-screen text-5xl text-gray-700 font-caveat pb-7">
        Coloring Pages
      </div>
      <div className="grid grid-cols-2 gap-15">
        <a href="/fairytale/peter-pan.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Peter Pan"
            className="object-none"
            src="/fairytale/peter-pan.webp"
          />
          <button className="bg-orange-600 hover:bg-pink-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            Peter Pan
          </button>
        </a>
        <a href="/fairytale/pinocchio.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Pinocchio"
            className="object-none"
            src="/fairytale/pinocchio.webp"
          />
          <button className="bg-orange-600 hover:bg-pink-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            Pinocchio
          </button>
        </a>
        <a href="/fairytale/puss-in-boots.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Puss In Boots"
            className="object-none"
            src="/fairytale/puss-in-boots.webp"
          />
          <button className="bg-orange-600 hover:bg-pink-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            Puss In Boots
          </button>
        </a>
        <a href="/fairytale/shrek.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Shrek"
            className="object-none"
            src="/fairytale/shrek.webp"
          />
          <button className="bg-orange-600 hover:bg-pink-500 text-4xl text-white font-caveat py-2 px-4 rounded">
            Shrek
          </button>
        </a>
      </div>
    </div>
  );
};

export default Fairytale;
