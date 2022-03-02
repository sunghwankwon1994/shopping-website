import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [prototypes] = useState([
    {
      id: "pp-01",
      title: "Phone",
      seller: "Thomas Buisson",
      desc: "This is the iPhoneX",
      image: "img/phone.jpg",
      price: 600,
    },
    {
      id: "pp-02",
      title: "Watch",
      seller: "Ahmed Amr",
      desc: "this is a Men's Leather Watch",
      image: "img/watch.jpg",
      price: 200,
    },
    {
      id: "pp-03",
      title: "Cap",
      seller: "Dominik Kandravý",
      desc: "This is an Unisex White Cap",
      image: "img/cap.jpg",
      price: 10,
    },
    {
      id: "pp-04",
      title: "Car",
      seller: "Tony Kim",
      desc: "this is a black mustang sports car",
      image: "img/car.jpg",
      price: 4000,
    },
    {
      id: "pp-05",
      title: "Camera",
      seller: "Tony Kim",
      desc: "It's a camera.",
      image: "img/camera.jpg",
      price: 500,
    },
    {
      id: "pp-06",
      title: "Shoes",
      seller: "Richard Oldfield",
      desc: `These are white Nike shoes.`,
      image: "img/nikeShoes.jpg",
      price: 120,
    },
    {
      id: "pp-07",
      title: "Boots",
      seller: "Mustafa Alabdullah",
      desc: "These are waterproof winter boots.",
      image: "img/boots.jpg",
      price: 170,
    },
    {
      id: "pp-08",
      title: "coordinating set",
      seller: "Fredo Tan",
      desc: `This is a men's coordinating set.`,
      image: "img/clothing.jpg",
      price: 250,
    },
    {
      id: "pp-09",
      title: "Laptop",
      seller: "Tony Kim",
      desc: "This is a Macbook.",
      image: "img/macbook.jpg",
      price: 900,
    },
    {
      id: "pp-10",
      title: "Perfume",
      seller: "Arpit Agrawal",
      desc: "This is a perfume",
      image: "img/perfume.jpg",
      price: 190,
    },
    {
      id: "pp-11",
      title: "Playstation",
      seller: "Changmo Kang",
      desc: "This is Playstation.",
      image: "img/playstation.jpg",
      price: 390,
    },
    {
      id: "pp-12",
      title: "Nintendo",
      seller: "Haerin Song",
      desc: `This is Nintendo`,
      image: "img/nintendo.jpg",
      price: 320,
    },
  ]);
  const [orders, setOrders] = useState([]);

  // [{id, quantity: 1}]
  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);

      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
