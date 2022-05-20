import Heading from "./components/Heading";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import "./index.css";
function App() {
  return (
    <div>
      <h2 className="main-heading">Expense Tracker</h2>
      <div className="container">
        <Heading />
        <History />
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
