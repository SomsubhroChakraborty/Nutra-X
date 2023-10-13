import React from 'react';
import './AppMealsList.css';
const AppMealsList = ({ meals, deleteMeal }) => {
  return (
    <div className="AppMealsList">
      {meals.map((meal, index) => (
        <div key={index} className="meal_item">
          <div>{`${meal.mealname} : ${meal.calories}`}</div>
          <div>
            <button className="btn_delete" onClick={()=>deleteMeal(meal.id)}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AppMealsList;
