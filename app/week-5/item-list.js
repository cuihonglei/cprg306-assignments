"use client"

import { useState } from "react";
import items from "./items.json";
import Item from "./item";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.toSorted((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <>
      <div className="mx-8">
        <span>Sort by:</span>
        <button className={`bg-amber-${sortBy == "name" ? 500 : 700} p-1 mx-2 w-28`} onClick={() => setSortBy("name")}>Name</button>
        <button className={`bg-amber-${sortBy == "category" ? 500 : 700} p-1 mx-2 w-28`} onClick={() => setSortBy("category")}>Category</button>
      </div>
      <button></button>
      <ul className="mx-8">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </>
  )
}