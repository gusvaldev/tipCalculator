import { formatCurrency } from "../helpers";
import { MenuItems, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItems["id"]) => void;
  decreaseQuantity: (id: MenuItems["id"]) => void;
};

export default function OrderContent({
  order,
  removeItem,
  decreaseQuantity,
}: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            className="flex justify-between border-t items-center  border-gray-400 py-5 last-of-type:border-b-2"
            key={item.id}
          >
            <div>
              <p className="text-lg font-normal">
                {item.name} - {formatCurrency(item.price)}
              </p>

              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="text-black text-lg text-center font-medium rounded-full bg-slate-300 h-6 w-6 border-black cursor-pointer"
              >
                -
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="text-white font-medium rounded-full bg-red-500 h-6 w-6 border-red-600 cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
