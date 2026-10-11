import Image from 'next/image';
import Right from '../icons/right';

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Welcome to ALAN <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500  text-sm">
          Experience the taste of authentic Italian pizza made with fresh
          ingredients and traditional recipes.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary px-4 py-2 rounded-full text-white flex gap-2  items-center cursor-pointer">
            ORDER NOW
            <Right />
          </button>
          <button className="py-2 flex gap-2 text-gray-600 font-semibold cursor-pointer">
            LEARN MORE <Right />
          </button>
        </div>
      </div>
      <div className=" relative">
        <Image
          src="/pizza.png"
          fill
          style={{ objectFit: 'contain' }}
          alt="pizza"
        />
      </div>
    </section>
  );
}
