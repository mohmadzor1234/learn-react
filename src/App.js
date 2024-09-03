import "./App.css";
import Header from "./header/Header";
import Card from "./card/Card";
import Aside from "./aside/Aside";

function App() {

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Card />
        <Aside />

      
      </div>
    </div>
  );
}

export default App;
