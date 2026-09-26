import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <h1>Welcome to SANYI Pizza</h1>
      <p>
        Experience the taste of authentic Italian pizza made with fresh
        ingredients and traditional recipes.
      </p>
      <div className='w-16 h-16 relative'>
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
