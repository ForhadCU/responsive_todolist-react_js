import "./App.css";

function App() {
  // variable with unknown datatype
  let anyTypeVar: unknown;

  anyTypeVar = 12;
  anyTypeVar = "";
  anyTypeVar = true;

  return <div className="App">Hello world</div>;
}

export default App;
