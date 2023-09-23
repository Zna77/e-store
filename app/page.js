import React from "react";
import RootLayout from "./layout";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <RootLayout>
      <ProductList />
    </RootLayout>
  );
}
