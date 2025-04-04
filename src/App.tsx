import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContent from "./components/OrderContent";

function App() {
  const { order, addItem, removeItem, decreaseQuantity } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 font-black grid md:grid-cols-2 gap-10">
        <div className="p-5">
          <h2 className="text-4xl font-black">MENU</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
          <OrderContent
            removeItem={removeItem}
            order={order}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
      </main>
    </>
  );
}

export default App;
