import logo from './logo.svg';
import './App.css';

import './content-tools';
import './editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
      <div data-editable data-name="main-content">
          <blockquote>
              Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.
          </blockquote>
          <p>John F. Woods</p>
      </div>
    </div>
  );
}

export default App;
