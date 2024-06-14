import "./App.css";

function App() {
  //multiple types of a single variable
  let multiTypeVariable: number | string | boolean;

  multiTypeVariable = "This is String";
  multiTypeVariable = 25;
  multiTypeVariable = true;

  return <div className="App">Hello world</div>;
}

export default App;
