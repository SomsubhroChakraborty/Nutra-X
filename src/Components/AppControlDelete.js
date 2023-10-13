import React from 'react';
import './AppControlDelete.css';

const AppControlDelete = ({deleteAllMeal}) => {
  return <div className="delete">
    <button className="btn_delete" onClick={()=>deleteAllMeal()}>Delete All</button>
  </div>;
};

export default AppControlDelete;