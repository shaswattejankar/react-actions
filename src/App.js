import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Using GitHub Actions for testing CI ( <code>with npm run build</code> ) 
          and CD with ( <code>jakejarvis/s3-sync-action@master</code>) under "Jobs" in the .yml file
        </h3>
      </header>
    </div>
  );
}

export default App;
