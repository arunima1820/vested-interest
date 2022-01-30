import logo from "./logo.svg";
import "./App.css";
import BarChart from "./Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarChart
          names={["David", "Arunima"]}
          values={[420, 69]}
          ylabel={"score"}
          displayTitle={true}
          title={"Who is Winning?"}
        ></BarChart>
      </header>
    </div>
  );
}

export default App;
