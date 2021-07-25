import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {

  const [outresponse, setResponse] = useState();
  useEffect(() => {

    // fetch("http://localhost:3000")
    //   .then(response => response.json())
    //   .then(data => setResponse(data))

    axios.get("http://localhost:3000")
      .then(function (response) {
        // handle success
        // console.log(response);
        console.log(response.data);
        setResponse(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function (data) {
        // always executed

      })
  }, []);

  return (
    <div> {outresponse}</div>
  );
}

export default App;