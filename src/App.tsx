import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";
import TipPercentage from "./components/TipPercentage";

function App() {
  const {
    order,
    addItem,
    removeItem,
    decreaseQuantity,
    tip,
    setTip,
    placeOrder,
  } = useOrder();
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
          {order.length > 0 ? (
            <>
              <OrderContent
                removeItem={removeItem}
                order={order}
                decreaseQuantity={decreaseQuantity}
              />

              <TipPercentage setTip={setTip} tip={tip} />

              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-2xl font-black">
              No hay productos en la orden
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
