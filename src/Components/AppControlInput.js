import React from 'react';
import './AppControlInput.css';
const AppControlInput = ({
  addMeal,
  calories,
  mealname,
  setMealname,
  setCalories,
}) => {
  const onaddMealsClick = () => {
    addMeal();
  };
  return (
    <div className="AppControlInput">
      <div className="AppInput">
        <input
          type="text"
          placeholder="Meal"
          value={mealname}
          onChange={(e) => setMealname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min={0}
        />
        <button onClick={onaddMealsClick}>Add Meal</button>
      </div>
    </div>
  );
};
export default AppControlInput;
