import "./App.css";

function App() {
  // inherit the "type" with "interface"
  type X = {
    a: string;
    b: number;
  };

  interface Person extends X {
    name: string;
    age?: number;
  }

  // inherit the "interface" with "type"
  interface Person2 {
    name: string;
    age: number;
  }
  type Y = Person2 & {
    a: string;
  };

  return <div className="App">Hello world</div>;
}

export default App;
