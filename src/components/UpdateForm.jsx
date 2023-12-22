import React, { useState } from 'react';
import axios from 'axios';
import env from "../secrets.js"

const { VITE_BACKEND_HOST } = env

const UpdateForm = ({ selectedItem, handleBack }) => {
  const [updatedItem, setUpdatedItem] = useState(selectedItem);

//   console.log(selectedItem)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
        updatedItem["numerologyNumber"] = Number(updatedItem["numerologyNumber"])
        console.log(updatedItem)
      // Send a request to the backend to update the item
      await axios.put(`${VITE_BACKEND_HOST}/openapi/prediction/${updatedItem.id}`, updatedItem);
      alert('Item updated successfully');
      // Perform any additional logic needed after update
      // ...
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Data</h2>
      {/* {Object.entries(updatedItem).map(([key, value]) => (
        <div key={key} className="mb-4">
          <label htmlFor={key} className="text-sm font-bold text-gray-700">
            {key}:
          </label>
          <input
            type="text"
            id={key}
            name={key}
            value={value}
            onChange={handleFieldChange}
            className="block w-full border mt-2 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      ))} */}
      <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <select
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.name}
              onChange={handleChange}
            >
              {Object.values({
                DESTINY: 'Destiny',
                SOUL: 'Soul',
                PERSONALITY: 'Personality',
                INTENSIFICATION: 'Intensification',
                KARAMA: 'Karama',
                SUBCONSCIOUS: 'Subconscious',
                POINTOFSECURITY: 'Point Of Security',
                BIRTHDAY: 'Birth Day',
                LIFEPATH: 'Life Path',
                PERSONALYEAR: 'Personal Year',
                PERSONALMONTH: 'Personal Month',
                PERSONALDAY: 'Personal Day',
                CORENUMBERCOMBO: 'Core Number Combo',
            }).map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="numerologyNumber" className="block text-gray-700 font-bold mb-2">
              Numerology Number
            </label>
            <input
              type="number"
              id="numerologyNumber"
              name="numerologyNumber"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.numerologyNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="what_is_heading" className="block text-gray-700 font-bold mb-2">
              What is Heading
            </label>
            <input
              type="text"
              id="what_is_heading"
              name="what_is_heading"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.what_is_heading}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="what_is_description" className="block text-gray-700 font-bold mb-2">
              What is Description
            </label>
            <textarea
              id="what_is_description"
              name="what_is_description"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.what_is_description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="what_is_description" className="block text-gray-700 font-bold mb-2">
              Heading
            </label>
            <textarea
              id="heading"
              name="heading"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.heading}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="add_description" className="block text-gray-700 font-bold mb-2">
            Add Description
            </label>
            <textarea
              id="add_description"
              name="add_description"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.add_description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="suggestion" className="block text-gray-700 font-bold mb-2">
            Suggestion
            </label>
            <textarea
              id="suggestion"
              name="suggestion"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              value={updatedItem.suggestion}
              onChange={handleChange}
            />
          </div>

          {/* Add other form fields similarly */}

          {/* <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div> */}
          <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
        </form>
      <div className="flex justify-end mt-4">
        
      </div>
    </div>
  );
};

export default UpdateForm;
