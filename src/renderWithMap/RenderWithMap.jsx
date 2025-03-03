import ShoeCardComponent from "./ShoeCardComponent";

const data = [
  { id: 1, name: "phone 1", price: 1000 },
  { id: 2, name: "phone 2", price: 2000 },
  { id: 3, name: "phone 3", price: 3000 },
  { id: 3, name: "phone 3", price: 3000 },
  { id: 3, name: "phone 3", price: 3000 },
  { id: 3, name: "phone 3", price: 3000 },
  { id: 3, name: "phone 3", price: 3000 },
];

const dataShoeShop = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "https://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "https://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 465,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 542,
    image: "https://svcy3.myclass.vn/images/adidas-super-star-red.png",
  },
  {
    id: 5,
    name: "Adidas Swift Run",
    alias: "adidas-swift-run",
    price: 550,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 674,
    image: "https://svcy3.myclass.vn/images/adidas-swift-run.png",
  },
  {
    id: 6,
    name: "Adidas Tenisky Super Star",
    alias: "adidas-tenisky-super-star",
    price: 250,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 456,
    image: "https://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
  },
  {
    id: 7,
    name: "Adidas Ultraboost 4",
    alias: "adidas-ultraboost-4",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 854,
    image: "https://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
  },
  {
    id: 8,
    name: "Adidas Yeezy 350",
    alias: "adidas-yeezy-350",
    price: 750,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 524,
    image: "https://svcy3.myclass.vn/images/adidas-yeezy-350.png",
  },
  {
    id: 9,
    name: "Nike Adapt BB",
    alias: "nike-adapt-bb",
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 599,
    image: "https://svcy3.myclass.vn/images/nike-adapt-bb.png",
  },
  {
    id: 10,
    name: "Nike Air Max 97",
    alias: "nike-air-max-97",
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 984,
    image: "https://svcy3.myclass.vn/images/nike-air-max-97.png",
  },
  {
    id: 11,
    name: "Nike Air Max 97 Blue",
    alias: "nike-air-max-97-blue",
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 875,
    image: "https://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
  },
  {
    id: 12,
    name: "Nike Air Max 270 React",
    alias: "nike-air-max-270-react",
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 445,
    image: "https://svcy3.myclass.vn/images/nike-air-max-270-react.png",
  },
];

const RenderWithMap = () => {
  const renderTrPhone = () => {
    const arrJSX = data.map((item) => {
      return (
        <tr
          key={item.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.id}
          </th>
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4">{item.price}</td>
        </tr>
      );
    });

    return arrJSX;
  };

  const renderCardShoe = () => {
    const arrJSX = dataShoeShop.map((item) => { //forEach 
      return (
        //key = id
        <div key={item.id}> 
          <ShoeCardComponent dataItem={item} />
        </div>
      );
    });
    return arrJSX;
  };

  return (
    <div className="relative overflow-x-auto container mx-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>{renderTrPhone()}</tbody>
      </table>

      <h3>List Shoe</h3>
      <div className="grid grid-cols-4">{renderCardShoe()}</div>
    </div>
  );
};

export default RenderWithMap;
