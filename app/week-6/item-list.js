"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {

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
        <button className={`${sortBy == "name" ? 'bg-amber-500' : 'bg-amber-700'} p-1 mx-2 w-28`} onClick={() => setSortBy("name")}>Name</button>
        <button className={`${sortBy == "category" ? 'bg-amber-500' : 'bg-amber-700'} p-1 mx-2 w-28`} onClick={() => setSortBy("category")}>Category</button>
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