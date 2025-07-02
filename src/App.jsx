import React, { useState } from 'react';
import PropertyForm from './components/PropertyForm';
import PropertyCard from './components/PropertyCard';
import Home from './components/Home.jsx';

function App() {
  const [properties, setProperties] = useState([]);

  const handleAddProperty = (newProperty) => {
    const withComputed = {
    ...newProperty,
    dimensions: `${newProperty.length} × ${newProperty.width} ft`,
  };
    setProperties([...properties, withComputed]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Home/>

      <h1 className="text-3xl font-bold text-center mb-6">Upload Site Details</h1>

      <PropertyForm onSubmit={handleAddProperty} />
      <PropertyCard properties={properties} />

    </div>
  );
}

export default App;
