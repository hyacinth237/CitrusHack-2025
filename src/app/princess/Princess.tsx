import Image from "next/image";

const Princess = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-screen text-6xl text-black">Princess</div>
      <div className="w-screen text-4xl text-gray-700">Coloring Pages</div>
      <div className="grid grid-cols-2 gap-15">
        <a href="/princess/anna.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Anna"
            className="object-none"
            src="/princess/anna.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Anna
          </button>
        </a>
        <a href="/princess/ariel.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Ariel"
            className="object-none"
            src="/princess/ariel.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Ariel
          </button>
        </a>
        <a href="/princess/aurora.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Aurora"
            className="object-none"
            src="/princess/aurora.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Aurora
          </button>
        </a>
        <a href="/princess/belle.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Belle"
            className="object-none"
            src="/princess/belle.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Belle
          </button>
        </a>
        <a href="/princess/cinderella.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Cinderella"
            className="object-none"
            src="/princess/cinderella.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Cinderella
          </button>
        </a>
        <a href="/princess/elsa.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Elsa"
            className="object-none"
            src="/princess/elsa.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Elsa
          </button>
        </a>
        <a href="/princess/jasmine.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Jasmine"
            className="object-none"
            src="/princess/jasmine.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Jasmine
          </button>
        </a>
        <a href="/princess/merida.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Merida"
            className="object-none"
            src="/princess/merida.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Merida
          </button>
        </a>
        <a href="/princess/moana.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Moana"
            className="object-none"
            src="/princess/moana.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Moana
          </button>
        </a>
        <a href="/princess/mulan.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Mulan"
            className="object-none"
            src="/princess/mulan.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Mulan
          </button>
        </a>
        <a href="/princess/pocahontas.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Pocahontas"
            className="object-none"
            src="/princess/pocahontas.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Pocahontas
          </button>
        </a>
        <a href="/princess/rapunzel.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Rapunzel"
            className="object-none"
            src="/princess/rapunzel.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Rapunzel
          </button>
        </a>
        <a href="/princess/snow-white.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Snow White"
            className="object-none"
            src="/princess/snow-white.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Snow White
          </button>
        </a>
        <a href="/princess/tiana.webp" target="_blank">
          <Image
            width={400}
            height={600}
            alt="Tiana"
            className="object-none"
            src="/princess/tiana.webp"
          />
          <button className="bg-indigo-500 hover:bg-pink-600 text-4xl text-white py-2 px-4 rounded">
            Tiana
          </button>
        </a>
      </div>
    </div>
  );
};

export default Princess;
