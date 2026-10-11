export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all">
      <div className="text-center ">
        <img
          src="./pizza.png"
          alt="Pepperoni Pizza"
          className="max-h-auto max-h-24 block mx-auto
        "
        />
      </div>
      <h4 className="font-semibold my-2 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-600 text-sm">
        Delicious pepperoni pizza with mozzarella cheese and tomato sauce.
      </p>
      <button className="bg-primary text-white py-2 px-8 rounded-lg hover:bg-blue-600 mt-4">
        Add to Cart $12
      </button>
    </div>
  );
}
