"use strict";

//creates new Vue instance, the root
//it's created by passing an options object into it, which has a variety of optional properties
var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: "./assets/vmSocks-green.jpg",
    link: "https://cnn.com",
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },
      {
        variantId: 2235,
        variantColor: "blue",
      },
    ],
    sizes: ["small", "medium", "large"],
  },
});
