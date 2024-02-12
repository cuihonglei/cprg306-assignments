"use client"

import { useState } from "react"

export default function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    // Display an alert with the current state of name, quantity, and category.
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset the state variables to their initial values.
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
          required
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <input
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg"
          required
          type="number"
          name="quantity"
          placeholder="Enter quantity"
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />

        <select
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg"
          required
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value disabled>Category</option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        type="submit"
      >
        +</button>
    </form>
  )
}