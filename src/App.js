import React, { useState } from 'react';
import Header from './components/Header';
import Category from './components/Category';
import closet from './data/closet';
import './App.css'


function App() {
  const [data, setData] = useState(closet);

  function handleAddItem(category, newItem) {
    const updatedData = { ...data };
    updatedData[category].push({ id: Date.now(), ...newItem });
    setData(updatedData);
  }

  function handleDeleteItem(category, item) {
    const updatedData = { ...data };
    updatedData[category] = updatedData[category].filter((i) => i.id !== item.id);
    setData(updatedData);
  }

  function handleUpdateItem(category, item, newItem) {
    const updatedData = { ...data };
    const index = updatedData[category].findIndex((i) => i.id === item.id);
    updatedData[category][index] = { ...item, ...newItem };
    setData(updatedData);
  }

  
  return (
    <div>
      <Header />
      <div className="container">
        <Category
          name="Tops"
          items={data.tops}
          onAdd={(item) => handleAddItem('tops', item)}
          onDelete={(item) => handleDeleteItem('tops', item)}
          onUpdate={(item, newItem) => handleUpdateItem('tops', item, newItem)}
        />
        <Category
          name="Bottoms"
          items={data.bottoms}
          onAdd={(item) => handleAddItem('bottoms', item)}
          onDelete={(item) => handleDeleteItem('bottoms', item)}
          onUpdate={(item, newItem) => handleUpdateItem('bottoms', item, newItem)}
        />
        <Category
          name="Shoes"
          items={data.shoes}
          onAdd={(item) => handleAddItem('shoes', item)}
          onDelete={(item) => handleDeleteItem('shoes', item)}
          onUpdate={(item, newItem) => handleUpdateItem('shoes', item, newItem)}
        />
      </div>
    </div>
  );
}

export default App;
