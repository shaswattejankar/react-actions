import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Using GitHub Reusable workflow from a different repo for building ( <code>with npm run build</code> ) 
          and deploying to s3 hosting
        </h3>
      </header>
    </div>
  );
}

export default App;
