import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;