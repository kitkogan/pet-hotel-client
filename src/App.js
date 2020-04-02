import React, {useEffect} from 'react';
import './App.css';

//using react hook to make API call to Flask server
//using react hooks to make the call with useEffect
//empty array at the end is like a 'component did mount', so whatever data at the 
//end of the path will render on page load but can be changed if needed.
//added proxy to package.json to help with the server request
function App() {
  useEffect(() => {
    fetch('/urlpathtoroute')
    .then(response => 
      response.json()
      .then(data => {
        console.log(data)
      })
    )
  }, []);
  return (
    <div className="App">
      <h2>PET HOTEL</h2>
       
  
    </div>
  );
}

export default App;
