import './App.css';
import axios from 'axios';

function App() {
  // NODE_URL => http://localhost:${port (from nodejs)}
  // let port = 3000;

  axios.get(`http://localhost:3000 `)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (data) {
      // always executed

    });

  return (
    <>
    </>

  );
}

export default App;
