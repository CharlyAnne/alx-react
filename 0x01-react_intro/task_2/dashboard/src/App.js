import './App.css';
import holberton_logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">
            Email:
            <input type="email" placeholder="Email" name="email" />
          </label>
          <label for="password">
            Password:
            <input type="password" placeholder="password" name="password" />
          </label>
          <button type="submit">OK</button>
        </form>
      </div>
      <div className="App-footer">
        {/* <p>{getFootercopy(false)}</p> */}
        <p>{`Copright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </div>
    </>
  );
}

export default App;
