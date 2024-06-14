import "./App.css";

function App() {
  // Function declaration
  let funcName: (param1: string, param2: number) => void; // return undefined type
  let funcName1: (param1: string) => never; // return nothing
  let funcName2: (param1: number) => string; // return string


  return <div className="App">Hello world</div>;
}

export default App;
