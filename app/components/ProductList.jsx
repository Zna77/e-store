"use client";
import { useEffect, useState } from "react";
import { productsData } from "@/data/products";
import Image from "next/image";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="w-full h-screen flex flex-row justify-center items-start mx-auto">
      <div className="grid grid-cols-2 gap-5 p-6 text-left">
        {products.map((product) => (
          <div key={product.id} className="">
            <Image
              src={product.imagePath}
              alt={product.name}
              width={350}
              height={200}
              className="rounded-2xl shadow-md shadow-black/30"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
