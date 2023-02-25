import React from 'react';
import Item from './Item';
import AddItem from './AddItem';

function Category(props) {
  const { name, items, onAdd, onDelete, onUpdate } = props;

  return (
    <div className="category">
      <h2>{name}</h2>
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
      <AddItem onAdd={onAdd} />
    </div>
  );
}

export default Category;
