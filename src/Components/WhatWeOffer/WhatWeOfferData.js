import salat1 from "./img/salat1.png";
import salat2 from "./img/salat2.png";
import salat3 from "./img/salat3.png";
import pasta from "./img/pasta.png";
import burger from "./img/burger.png";
import steak from "./img/steak.png";
import donut from "./img/donut.png";
import muffin from "./img/muffin.png";
import cake from "./img/cake.png";

const Salat = [
  {
    id: 1,
    type: "salat",
    image: salat1,
    title: "Shrimp salat",
    description:
      "Vegetables mixed with sauce , on top filled with grilled shrimps",
    price: "10 $",
  },
  {
    id: 2,
    type: "salat",
    image: salat2,
    title: "Vegetable salat",
    description: "Vegetables mixed , on top filled with grilled chese",
    price: "8 $",
  },
  {
    id: 3,
    type: "salat",
    image: salat3,
    title: "Chicken salat",
    description:
      "Vegetables mixed with sauce , on top filled with grilled chicken",
    price: "10 $",
  },
];
const Main = [
  {
    id: 4,
    type: "mein",
    image: burger,
    title: "Burger",
    description:
      "Two breads in between delicious combination of meat and vegerables with sauce",
    price: "20 $",
  },
  {
    id: 5,
    type: "mein",
    image: pasta,
    title: "Pasta",
    description:
      "Favorite italian spagetty made with special vegetables , meat and sauce",
    price: "30 $",
  },
  {
    id: 6,
    type: "mein",
    image: steak,
    title: "Steak",
    description:
      "Carefully selected steak prepared on grill with fries and some tomatoes",
    price: "50 $",
  },
];
const Dessert = [
  {
    id: 7,
    type: "dessert",
    image: donut,
    title: "Donut",
    description: "Cops cant avoid so u should not to as well",
    price: "3 $",
  },
  {
    id: 8,
    type: "dessert",
    image: muffin,
    title: "Muffin",
    description: "Kids love it why should u not ?",
    price: "5 $",
  },
  {
    id: 9,
    type: "dessert",
    image: cake,
    title: "Cake",
    description: "Special cake from special cheff",
    price: "4 $",
  },
];

export { Salat, Main, Dessert };
