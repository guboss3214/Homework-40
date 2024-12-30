import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  const agreeRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const agree = agreeRef.current.checked;
    alert(`Submitted: { name: ${name}, agree: ${agree} }`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Uncontrolled Form
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
          ref={nameRef}
          className="w-full px-4 py-2 border text-black border-gray-300 bg-slate-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="agree"
          className="inline-flex items-center text-gray-700 font-semibold"
        >
          <input
            type="checkbox"
            ref={agreeRef}
            className="form-checkbox text-blue-500 focus:ring-blue-500"
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
}

export default UncontrolledForm;
