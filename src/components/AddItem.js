import React, { useState } from 'react';

function AddItem(props) {
  const { onAdd } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAdd({ name, description, image });
    setName('');
    setDescription('');
    setImage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItem;
