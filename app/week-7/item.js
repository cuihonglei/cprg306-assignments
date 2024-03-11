export default function Item({ name, quantity, category, onSelect }) {

  return (
    <li className="p-2 bg-violet-950 my-4 max-w-96 cursor-pointer" onClick={onSelect}>
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="">Buy {quantity} in {category}</div>
    </li>
  )
}