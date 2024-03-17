"use client"

import { useEffect, useState } from "react"

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`${API_URL}${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
};

export default function ({ ingredient }) {

  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  let tip = "";
  if (!ingredient) {
    tip = "Select an item to see meal ideas";
  } else if (!meals.length) {
    tip = `No meal ideas found for ${ingredient}`;
  } else {
    tip = `Here are some meal ideas using ${ingredient}:`;
  }

  return (
    <div className="mx-8">
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      <p>{tip}</p>
      <ul>
        {meals.map((meal) => (
          <li className="p-2 my-2 bg-violet-950" key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}