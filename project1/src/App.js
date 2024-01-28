import logo from "./kaLion.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id="info">
        <h2>
          {" "}
          manasa yerra
          <br />
          <a href="https://en.wikipedia.org/wiki/Pawan_Kalyan">
            Click here to know more info.
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
