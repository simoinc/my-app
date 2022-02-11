import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react';
import ReactDOM from 'react-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/*

export default function App() {
  class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }

  ReactDOM.render(React.createElement(HelloMessage, { name: "Alex" }), document.getElementById('hello-example'));
}
*/

function App() {

  const objectInput = useRef(null);
  const clearInput = () =>{
    objectInput.current.value = "";
  }

  return(
    <div className="App">
      <input type="text" placeholder='Enter your name 123' ref={objectInput}/>
      <button onClick={clearInput}> Clear the field </button>
    </div>
  );
}

export default App;
