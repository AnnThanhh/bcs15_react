import { useState } from "react";
import CarItems from "./CarItems";
import ModalCar from "./ModalCar";

const data = [
  {
    id: 1,
    name: "black car",
    img: "./public/img/car/black-car.jpg",
    price: 1000,
  },
  {
    id: 2,
    name: "red car",
    img: "./public/img/car/red-car.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "silver car",
    img: "./public/img/car/silver-car.jpg",
    price: 3000,
  },
  {
    id: 3,
    name: "Steel car",
    img: "./public/img/car/steel-car.jpg",
    price: 4000,
  },
];
const CarStore = () => {
  const [carState, setCarState] = useState({
    id: 3,
    name: "silver car",
    img: "./public/img/car/silver-car.jpg",
    price: 3000,
  });
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        {data.map((car, index) => {
          return <CarItems key={index} car={car} setCarState={()=>{setCarState(car)}}/>;
        })}
      </div>
      <ModalCar carState={carState} />
    </div>
  );
};

export default CarStore;
