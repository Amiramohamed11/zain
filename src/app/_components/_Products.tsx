import React from 'react';

interface Product {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
  priceAfterDiscount?: number;
  category: { name: string };
  ratingsAverage: number;
}

export default async function Products() {
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
  const data = await res.json();
  const allProducts: Product[] = data.data;

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6 p-4">
      {allProducts.map((product) => (
        <div
          key={product._id}
          className="border rounded-xl shadow-lg overflow-hidden p-4 flex flex-col items-center space-y-3"
        >
          <img
            src={product.imageCover}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-emerald-600 text-sm text-center">
            {product.category.name}
          </h3>
          <h2 className="font-medium text-gray-800 text-sm text-center">
            {product.title.split(" ", 2).join(" ")}
          </h2>
          <div className="flex justify-between items-center text-sm w-full px-2">
            {product.priceAfterDiscount ? (
              <div className="space-x-1 text-center">
                <span className="line-through text-red-400">
                  {product.price} EGP
                </span>
                <span className="font-bold text-emerald-600">
                  {product.priceAfterDiscount} EGP
                </span>
              </div>
            ) : (
              <span className="font-bold text-emerald-600">{product.price} EGP</span>
            )}
            <span className="flex items-center gap-1 text-yellow-500">
              <i className="fas fa-star"></i>
              <span className="text-gray-700">
                {product.ratingsAverage.toFixed(1)}
              </span>
            </span>
          </div>
          <button className="hover:bg-green-500 border border-green-500 text-green-600 hover:text-white rounded-md w-full py-1.5 transition-all duration-300">
            أضف الى السله
          </button>
        </div>
      ))}
    </div>
  );
}
