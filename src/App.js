import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Itembar from './Components/Itembar';
import AppControlsCounter from './Components/AppControlsCounter';
import AppControlDelete from './Components/AppControlDelete';
import AppControlInput from './Components/AppControlInput';
import AppMealsList from './Components/AppMealsList';

// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [mealname, setMealname] = useState('');
  const [calories, setCalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const addMeal = () => {
    const oldMeals = [...meals];
    const newMeal = {
      mealname,
      calories,
      id: Math.floor(Math.random() * 1000),
    };
    const newMeals = oldMeals.concat(newMeal);

    if (calories <= 0 || mealname === '') {
      alert('Please enter valid input');
    } else {
      setMeals(newMeals);
    }
    setMealname('');
    setCalories(0);
  };
  const deleteMeal = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
  };
  const deleteAllMeal = () => {
    setMeals([]);
  };
  const total = meals
    .map((meal) => meal.calories)
    .reduce((acc, value) => acc + +value, 0);

  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route path="./Components/Home" exact component={Home} />
        <Route path="./Components/About" component={About} />
        <Route path="./Components/Contact" component={Contact} />
      </Switch> */}
      <Itembar />
      <AppControlsCounter total={total} />
      <AppControlDelete deleteAllMeal={deleteAllMeal} />
      <AppControlInput
        addMeal={addMeal}
        mealname={mealname}
        calories={calories}
        setMealname={setMealname}
        setCalories={setCalories}
      />
      <div className="container">
        <AppMealsList meals={meals} deleteMeal={deleteMeal} />
      </div>
    </Router>
  );
};

export default App;
