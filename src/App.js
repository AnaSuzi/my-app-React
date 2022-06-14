import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Weather />
      </div>
      <div className="footer">
        <a
          href="https://github.com/AnaSuzi/my-app-React"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          open-source code
        </a>

        <div className="my-name">by Ana Caserman</div>
      </div>
    </div>
  );
}
