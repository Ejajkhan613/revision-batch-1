import { useState } from 'react';
import './App.css'

function App() {
  let [data, setData] = useState({ name: '', email: '' });
  const handleFormSubmission = (event) => {
    event.preventDefault();

    let nameVal = document.getElementById("name").value;
    let emailVal = document.getElementById("email").value;

    setData(() => {
      data = {
        name: nameVal,
        email: emailVal
      }
    })
    console.log(data);
  };

  return (
    <>
      <form>
        <input type="text" name="name" id="name" />
        <input type="email" name="email" id="email" />
        <button type='submit' onClick={handleFormSubmission}>Submit</button>
      </form>
    </>
  )
}

export default App
