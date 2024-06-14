import "./App.css";

function App() {
  // dataTypes
  let name: string;
  let intNumber: number;
  let boolVar: boolean;
  let stringArray: string[];
  let role: [number, string];
  type Person = {
    name: string;
    age: number;
    isMarried?: boolean; //optional/nullable
  };
  let personObjet: Person = {
    name: "Mr React",
    age: 25,
  };
  let personObjetArray: Person[];

  return <div className="App">Hello world</div>;
}

export default App;
