import React, { useState } from "react";
import PropTypes  from "prop-types";

export const AddCategory = ({ setCategories }) => {
  //HOOKS
  const [inputValue, setInputValue] = useState('');
  //handle
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue, ...cats]);
      setInputValue("");
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input placeholder="search" type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
};



