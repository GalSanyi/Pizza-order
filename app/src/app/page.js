import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';
const data = new Date();
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 text-sm flex flex-col gap-4">
          <p>
            Welcome to Alan Pizza, where we bring the authentic taste of Italy
            to your table. Our passion for pizza is evident in every slice we
            serve, made with the freshest ingredients and traditional recipes
            passed down through generations. From our classic Margherita to our
            gourmet creations, we offer a variety of options to satisfy every
            palate. Join us for a dining experience that combines great food,
            warm hospitality, and a love for pizza that is unmatched.
          </p>
          <p>
            At Alan Pizza, we believe that pizza is more than just a meal; it's
            a celebration of flavors and a gathering of friends and family. Our
            chefs take pride in crafting each pizza with care, ensuring that
            every bite is a delightful experience. Whether you're dining in our
            cozy restaurant or enjoying our pizzas at home, we strive to create
            memorable moments for our customers. Come and taste the difference
            at Alan Pizza, where every pizza tells a story of passion,
            tradition, and culinary excellence.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Contact us'} mainHeader={'Get in touch'} />
        <div className="mt-8">
          <a
            className="text-4xl font-bold underline text-grey-500"
            href="tel:123-456-7890"
          >
            +1 (123) 456-7890
          </a>
        </div>
      </section>
      <footer className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        <p>&copy; {data.getFullYear()} Alan Pizza. All rights reserved.</p>
      </footer>
    </>
  );
}
