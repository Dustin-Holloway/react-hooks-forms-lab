import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
  };

  const categorySelector = (e) => {
    setCategory(e.target.value);
  };

  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={categorySelector}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
