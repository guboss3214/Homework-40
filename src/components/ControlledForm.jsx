import { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({ name: '', agree: false });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Agree: ${formData.agree}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Controlled Form
      </h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border bg-slate-50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="agree"
          className="inline-flex items-center text-gray-700 font-semibold"
        >
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="form-checkbox text-blue-500"
          />
          <span className="ml-2">Agree to Terms</span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
