import type { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className="border-2 border-teal-400 rounded-lg w-full flex justify-between p-3 hover:bg-teal-200 cursor-pointer"
        onClick={() => addItem(item)}
      >
        <p className="font-medium ">{item.name}</p>
        <p>${item.price}</p>
      </button>
    </>
  );
}
