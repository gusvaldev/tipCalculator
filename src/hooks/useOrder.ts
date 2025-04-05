import { useState } from "react";
import { MenuItems, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item: MenuItems) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItems["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id: MenuItems["id"]) => {
    const orderValue = order.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity! - 1,
        };
      }

      return item;
    });

    setOrder(orderValue.filter((item) => item.quantity! > 0));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    addItem,
    removeItem,
    decreaseQuantity,
    tip,
    setTip,
    total,
    setTotal,
    placeOrder,
  };
}
