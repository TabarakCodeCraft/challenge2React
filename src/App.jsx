import "./App.css";
import Card from "./components/card/card"
import Card2 from "./components/challenge3/card/card";


function App() {

  return (
    <main>
      <div className="task1">
      <Card />
      </div>

      <div className="task2">
        <Card2 />
      </div>
    </main>

  )
}

export default App;
