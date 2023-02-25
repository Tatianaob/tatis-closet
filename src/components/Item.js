import React from 'react';

function Item(props) {
  const { item, onDelete, onUpdate } = props;

  function handleDelete() {
    onDelete(item);
  }

  function handleUpdate() {
    onUpdate(item.description);
  }
//   function handleEdit() {
//     OnEdit(item);
//   }

  return (
    <div className="item">
      <div className="item-details">
        <img src={item.image} alt={item.name} />
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="item-actions">
        <button onClick={handleUpdate}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Item;
