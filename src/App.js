// import Heading from "./components/Heading";
import NewTransaction from "./components/NewTransaction";
import "./index.css";
function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <div className="container">
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
