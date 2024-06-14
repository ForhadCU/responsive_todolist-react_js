import "./App.css";

function App() {
  // inherit the "type" datatype
  type X = {
    a: string;
    b: number;
  };
  type Y = X & {
    c: string;
    d: number;
  };

  let yObject: Y = {
    c: "aNmae",
    d: 1,
    a: "aName",
    b: 2,
  };

  // inherit the "interface" datatype
  interface Person {
    name: string;
    age?: number;
  }
  interface Profession extends Person {
    companyName: string;
    year: number;
    isCurrentlyWork: boolean;
  }

  let professionObject: Profession = {
    name: "Mr React",
    // age is optional so not ovbious to assign
    companyName: "Company Name",
    year: 3,
    isCurrentlyWork: true,
  };

  return <div className="App">Hello world</div>;
}

export default App;
