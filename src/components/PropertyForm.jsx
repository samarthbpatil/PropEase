import { useState } from 'react';
import styles from './propertyform.module.css';

const PropertyForm = ({ onSubmit }) => {
const [length, setLength] = useState('');
const [width, setWidth] = useState('');

const [description, setDescription] = useState('');
const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!length || !width || !description || !image) {
    alert("Please fill all fields.");
    return;
  }

  const formData = {
    length,
    width,
    description,
    image,
    id: Date.now(),
  };

  onSubmit(formData);

  setLength('');
  setWidth('');
  setDescription('');
  setImage(null);
};

return (
  <div> 
  
  <form onSubmit={handleSubmit} className={styles.form_container}>
    <div className="flex gap-4">
      <input
        type="number"
        placeholder="Length (ft)"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Width (ft)"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <textarea
      placeholder="Site Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="block w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      rows={4}
    />

    <input
      type="file"
      accept="image/*"
      capture="environment"
      onChange={handleImageChange}
      className="block mb-2"
    />

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded shadow"
    >
      Add Property
    </button>
  </form>
  </div>

);
};

export default PropertyForm;
