import Image from "next/image";

const Fantasy = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-screen text-6xl text-black">Fantasy</div>
      <div className="w-screen text-4xl text-gray-700">Coloring Pages</div>
      <div className="grid grid-cols-2 gap-15">
        <a href="/fantasy/encanto.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Encanto"
            className="object-none"
            src="/fantasy/encanto.webp"
          />
          <button className="bg-red-500 hover:bg-amber-700 text-4xl text-white py-2 px-4 rounded">
            Encanto
          </button>
        </a>
        <a href="/fantasy/harry-potter.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Harry Potter"
            className="object-none"
            src="/fantasy/harry-potter.webp"
          />
          <button className="bg-red-500 hover:bg-amber-700 text-4xl text-white py-2 px-4 rounded">
            Harry Potter
          </button>
        </a>
        <a href="/fantasy/nightmare-before-christmas.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Nightmare Before Christmas"
            className="object-none"
            src="/fantasy/nightmare-before-christmas.webp"
          />
          <button className="bg-red-500 hover:bg-amber-700 text-4xl text-white py-2 px-4 rounded">
            Nightmare Before Christmas
          </button>
        </a>
        <a href="/fantasy/smurfs.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Smurfs"
            className="object-none"
            src="/fantasy/smurfs.webp"
          />
          <button className="bg-red-500 hover:bg-amber-700 text-4xl text-white py-2 px-4 rounded">
            Smurfs
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <a href="/fantasy/star-wars.webp" target="_blank">
          <Image
            width={350}
            height={500}
            alt="Star Wars"
            className="object-none"
            src="/fantasy/star-wars.webp"
          />
          <button className="bg-red-500 hover:bg-amber-700 text-4xl text-white py-2 px-4 rounded">
            Star Wars
          </button>
        </a>
      </div>
    </div>
  );
};

export default Fantasy;
