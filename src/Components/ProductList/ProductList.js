import React from "react";

const ProductList = () => {
  //making an array of hard coded data given to us
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div>
      <p>Product List</p>
      {productsArr.map((item, id) => (
        <div key={id}>
          {item.title}, {item.price}
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
};
export default ProductList;