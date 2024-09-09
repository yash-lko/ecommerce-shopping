import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";
import { products } from "../../../constants";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product
            key={product.id}
            _id={product.id.toString()} // Assuming _id is expected to be a string
            img={product.image}
            productName={product.title}
            price={product.price.toFixed(2)} // Formatting price to two decimal places
            
           
            des={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
